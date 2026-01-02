import { SUPPORTED_DOC_TYPE } from "@/constants";

export type MessageRole = "system" | "user" | "assistant";

export type SupportedDocType = (typeof SUPPORTED_DOC_TYPE)[number];

export interface DocGenerateOptions {
  type: SupportedDocType;
  content: string;
  filename?: string;
  language?: string; // for code files
}

export interface ChatDocumentPayload {
  organization_id: string;
  conversation_id: string;
  source: string;
  message_id: string;
  file_name: string;
  file_type: string;
  mime_type: string;
  size_bytes: number;
  storage_path: string;
  model: string;
  event_type: string;
  actor_type: string;
  user_id: string;
}
