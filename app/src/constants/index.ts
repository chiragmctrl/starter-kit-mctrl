export const MODEL_PROVIDERS = [
  {
    name: "claude-haiku-4-5",
    value: "claude-haiku-4-5"
  },
  {
    name: "claude-sonnet-4-5",
    value: "claude-sonnet-4-5"
  }
];

export const SUPPORTED_DOC_TYPE = ["pdf", "docx", "xlsx", "pptx", "txt", "csv", "js", "py"] as const;
export const MIME_TYPES = {
  txt: "text/plain",
  csv: "text/csv",
  js: "application/javascript",
  py: "text/x-python"
};

export const CONTENT_TYPES = {
  pdf: "application/pdf",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
};
