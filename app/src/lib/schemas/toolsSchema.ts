import { SUPPORTED_DOC_TYPE } from "@/constants";
import z from "zod";

export const generateDocxInputSchema = z.object({
  type: z.enum(SUPPORTED_DOC_TYPE),
  title: z.string().describe("kebab-case title based on the document content e.g hello-world"),
  sections: z
    .array(
      z.object({
        heading: z.string().describe("Section heading"),
        paragraphs: z.array(z.string()).optional(),
        bullets: z.array(z.string()).optional()
      })
    )
    .describe("structured content for DOCX generation"),
  resource_id: z.string().optional().describe("If updating an existing document, provide the resource_id from the previous message metadata")
});

export const generateExcelInputSchema = z.object({
  type: z.enum(SUPPORTED_DOC_TYPE),
  title: z.string().describe("kebab-case title based on the document content e.g hello-world"),
  sheets: z
    .array(
      z.object({
        name: z.string().describe("Worksheet name"),
        columns: z.array(
          z.object({
            header: z.string().describe("Column header text"),
            key: z.string().describe("Row object key"),
            width: z.number().optional(),
            type: z.enum(["string", "number", "date"]).optional()
          })
        ),
        rows: z.array(z.record(z.string(), z.any())).describe("Row data")
      })
    )
    .describe("structured content for Excel generation"),
  resource_id: z.string().optional().describe("If updating an existing document, provide the resource_id from the previous message metadata")
});

export const generatePptxInputSchema = z.object({
  type: z.enum(SUPPORTED_DOC_TYPE),
  title: z.string().describe("kebab-case title based on the document content e.g hello-world"),
  slides: z
    .array(
      z.object({
        title: z.string().describe("Slide title"),
        bullets: z.array(z.string()).max(6).optional().describe("Bullet points for the slide")
      })
    )
    .describe("structured content for PPTX generation"),
  resource_id: z.string().optional().describe("If updating an existing document, provide the resource_id from the previous message metadata")
});

export const generateTextInputSchema = z.object({
  type: z.string().describe("text files like txt, csv, js, py etc"),
  title: z.string().describe("kebab-case title based on the document content e.g hello-world"),
  content: z.string().describe("Raw file content"),
  resource_id: z.string().optional().describe("If updating an existing document, provide the resource_id from the previous message metadata")
});

export const generatePdfInputSchema = z.object({
  type: z.enum(SUPPORTED_DOC_TYPE),
  title: z.string().describe("kebab-case title based on the document content e.g hello-world"),
  html_content: z.string().describe("html content as a result of user query"),
  resource_id: z.string().optional().describe("If updating an existing document, provide the resource_id from the previous message metadata")
});

export type GenerateDocxInputType = z.infer<typeof generateDocxInputSchema>;
export type GenerateExcelInputType = z.infer<typeof generateExcelInputSchema>;
export type GeneratePptxInputType = z.infer<typeof generatePptxInputSchema>;
