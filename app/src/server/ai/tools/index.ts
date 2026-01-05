import "server-only";
import { anthropic } from "@ai-sdk/anthropic";
import { tool } from "ai";
import { MINIO_BUCKET, minioClient } from "@/server/minio/client";
import { generateDOCX, generateEXCEL, generatePDF, generatePPTX, generateTEXT } from "../helper";
import {
  generateDocxInputSchema,
  generateExcelInputSchema,
  generatePdfInputSchema,
  generatePptxInputSchema,
  generateTextInputSchema
} from "@/lib/schemas/toolsSchema";
import { MIME_TYPES } from "@/constants";
import type { z } from "zod";

export const webSearchTool = anthropic.tools.webSearch_20250305({
  maxUses: 3
});

export const webFecthTool = anthropic.tools.webFetch_20250910({ maxUses: 1 });

export const codeExecutionTool = anthropic.tools.codeExecution_20250825();

// Shared upload and metadata extraction logic
async function uploadAndGetMetadata(objectName: string, buffer: Buffer, contentType: string) {
  try {
    await minioClient.putObject(MINIO_BUCKET, objectName, buffer, buffer.length, { "Content-Type": contentType });
  } catch (error) {
    console.log(error);
  }

  const stat = await minioClient.statObject(MINIO_BUCKET, objectName);
  const fileType = objectName.includes(".") ? objectName.split(".").pop()!.toLowerCase() : "unknown";

  return {
    type: "document" as const,
    fileType,
    filename: objectName,
    key: `${MINIO_BUCKET}/${objectName}`,
    mime_type: stat.metaData?.["content-type"] ?? `application/${fileType}`,
    size_bytes: stat.size
  };
}

// Factory function to create document generation tools
function createDocumentTool<T extends z.ZodType>(config: {
  description: string;
  inputSchema: T;
  extension: string;
  contentType: string;
  generateFn: (input: any) => Promise<Buffer>;
}) {
  return tool({
    description: config.description,
    inputSchema: config.inputSchema,
    execute: async (input: any) => {
      const objectName = `${input.title}-${Date.now()}.${config.extension}`;
      const buffer = await config.generateFn(input);
      const metadata = await uploadAndGetMetadata(objectName, buffer, config.contentType);

      return {
        ...metadata,
        format: input.type
      };
    }
  });
}

export const generatePDFDocumentTool = createDocumentTool({
  description: "Generate a pdf document in a requested format",
  inputSchema: generatePdfInputSchema,
  extension: "pdf",
  contentType: "application/pdf",
  generateFn: async (input) => generatePDF(input.html_content)
});

export const generateDOCXDocumentTool = createDocumentTool({
  description: "Generate a DOCX document from structured content",
  inputSchema: generateDocxInputSchema,
  extension: "docx",
  contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  generateFn: async (input) => generateDOCX(input.sections, input.title)
});

export const generateExcelDocumentTool = createDocumentTool({
  description: "Generate a Excel document from structured content",
  inputSchema: generateExcelInputSchema,
  extension: "xlsx",
  contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  generateFn: async (input) => generateEXCEL(input.sheets)
});

export const generatePPTXDocumentTool = createDocumentTool({
  description: "Generate a PPTX document from structured content",
  inputSchema: generatePptxInputSchema,
  extension: "pptx",
  contentType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  generateFn: async (input) => generatePPTX(input.slides)
});

export const generateTextDocumentTool = tool({
  description: "Generate plain text based files like txt, csv and js, py like code files",
  inputSchema: generateTextInputSchema,
  execute: async ({ type, title, content }) => {
    const objectName = `${title}-${Date.now()}.${type}`;
    const buffer = await generateTEXT(content);
    const contentType = MIME_TYPES[type as keyof typeof MIME_TYPES] || "text/plain; charset=utf-8";
    const metadata = await uploadAndGetMetadata(objectName, buffer, contentType);

    return {
      ...metadata,
      format: type
    };
  }
});
