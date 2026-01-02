import "server-only";
import { SUPPORTED_DOC_TYPE } from "@/constants";
import { anthropic } from "@ai-sdk/anthropic";
import { tool } from "ai";
import z from "zod";
import { MINIO_BUCKET, minioClient } from "@/server/minio/client";
import { generateDocument } from "@/helper";

export const webSearchTool = anthropic.tools.webSearch_20250305({
  maxUses: 3
});

export const webFecthTool = anthropic.tools.webFetch_20250910({ maxUses: 1 });

export const codeExecutionTool = anthropic.tools.codeExecution_20250825();

export const generateDocumentTool = tool({
  description: "Generate a document in a requested format",
  inputSchema: z.object({
    type: z.enum(SUPPORTED_DOC_TYPE),
    title: z.string().describe("kebab-case title based on the document content e.g hello-world"),
    html_content: z.string().describe("html content as a result of user query")
  }),
  execute: async ({ type, title, html_content }) => {
    const objectName = `${title}-${Date.now()}.pdf`;

    const buffer = await generateDocument({ type, content: html_content });

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
