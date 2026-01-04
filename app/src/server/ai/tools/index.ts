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

export const webSearchTool = anthropic.tools.webSearch_20250305({
  maxUses: 3
});

export const webFecthTool = anthropic.tools.webFetch_20250910({ maxUses: 1 });

export const codeExecutionTool = anthropic.tools.codeExecution_20250825();

export const generatePDFDocumentTool = tool({
  description: "Generate a pdf document in a requested format",
  inputSchema: generatePdfInputSchema,
  execute: async ({ type, title, html_content }) => {
    const objectName = `${title}-${Date.now()}.pdf`;

    const buffer = await generatePDF(html_content);

    try {
      // Upload to MinIO
      const res = await minioClient.putObject(MINIO_BUCKET, objectName, buffer as Buffer, buffer.length, {
        "Content-Type": "application/pdf"
      });

      console.log(res, "res");
    } catch (error) {
      console.log(error);
    }

    // Get file metadata
    const stat = await minioClient.statObject(MINIO_BUCKET, objectName);
    const fileType = objectName.includes(".") ? objectName.split(".").pop()!.toLowerCase() : "unknown";

    return {
      type: "document",
      format: type,
      fileType,
      filename: objectName,
      key: `${MINIO_BUCKET}/${objectName}`,
      mime_type: stat.metaData?.["content-type"] ?? `application/${fileType}`,
      size_bytes: stat.size
    };
  }
});

export const generateDOCXDocumentTool = tool({
  description: "Generate a DOCX document from structured content",
  inputSchema: generateDocxInputSchema,
  execute: async ({ type, title, sections }) => {
    const objectName = `${title}-${Date.now()}.docx`;

    const buffer = await generateDOCX(sections, title);

    try {
      // Upload to MinIO
      const res = await minioClient.putObject(MINIO_BUCKET, objectName, buffer as Buffer, buffer.length, {
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      });

      console.log(res, "res");
    } catch (error) {
      console.log(error);
    }

    // Get file metadata
    const stat = await minioClient.statObject(MINIO_BUCKET, objectName);
    const fileType = objectName.includes(".") ? objectName.split(".").pop()!.toLowerCase() : "unknown";

    return {
      type: "document",
      format: type,
      fileType,
      filename: objectName,
      key: `${MINIO_BUCKET}/${objectName}`,
      mime_type: stat.metaData?.["content-type"] ?? `application/${fileType}`,
      size_bytes: stat.size
    };
  }
});

export const generateExcelDocumentTool = tool({
  description: "Generate a Excel document from structured content",
  inputSchema: generateExcelInputSchema,
  execute: async ({ type, title, sheets }) => {
    const objectName = `${title}-${Date.now()}.xlsx`;

    const buffer = await generateEXCEL(sheets);

    try {
      // Upload to MinIO
      await minioClient.putObject(MINIO_BUCKET, objectName, buffer as Buffer, buffer.length, {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      });
    } catch (error) {
      console.log(error);
    }

    // Get file metadata
    const stat = await minioClient.statObject(MINIO_BUCKET, objectName);
    const fileType = objectName.includes(".") ? objectName.split(".").pop()!.toLowerCase() : "unknown";

    return {
      type: "document",
      format: type,
      fileType,
      filename: objectName,
      key: `${MINIO_BUCKET}/${objectName}`,
      mime_type: stat.metaData?.["content-type"] ?? `application/${fileType}`,
      size_bytes: stat.size
    };
  }
});

export const generatePPTXDocumentTool = tool({
  description: "Generate a PPTX document from structured content",
  inputSchema: generatePptxInputSchema,
  execute: async ({ type, title, slides }) => {
    const objectName = `${title}-${Date.now()}.pptx`;
    const buffer = await generatePPTX(slides);

    try {
      // Upload to MinIO
      await minioClient.putObject(MINIO_BUCKET, objectName, buffer as Buffer, buffer.length, {
        "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
      });
    } catch (error) {
      console.log(error);
    }

    // Get file metadata
    const stat = await minioClient.statObject(MINIO_BUCKET, objectName);
    const fileType = objectName.includes(".") ? objectName.split(".").pop()!.toLowerCase() : "unknown";

    return {
      type: "document",
      format: type,
      fileType,
      filename: objectName,
      key: `${MINIO_BUCKET}/${objectName}`,
      mime_type: stat.metaData?.["content-type"] ?? `application/${fileType}`,
      size_bytes: stat.size
    };
  }
});

export const generateTextDocumentTool = tool({
  description: "Generate plain text based files like txt, csv and js, py like code files",
  inputSchema: generateTextInputSchema,
  execute: async ({ type, title, content }) => {
    const objectName = `${title}-${Date.now()}.${type}`;
    const buffer = await generateTEXT(content);

    try {
      // Upload to MinIO
      await minioClient.putObject(MINIO_BUCKET, objectName, buffer as Buffer, buffer.length, {
        "Content-Type": MIME_TYPES[type as keyof typeof MIME_TYPES] || "text/plain; charset=utf-8"
      });
    } catch (error) {
      console.log(error);
    }

    // Get file metadata
    const stat = await minioClient.statObject(MINIO_BUCKET, objectName);
    const fileType = objectName.includes(".") ? objectName.split(".").pop()!.toLowerCase() : "unknown";

    return {
      type: "document",
      format: type,
      fileType,
      filename: objectName,
      key: `${MINIO_BUCKET}/${objectName}`,
      mime_type: stat.metaData?.["content-type"] ?? `application/${fileType}`,
      size_bytes: stat.size
    };
  }
});
