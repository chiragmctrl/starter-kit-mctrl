"use client";
import DOCXViewer from "./chat/DOCXViewer";
import ExcelPreview from "./chat/ExcelPreview";
import PDFViewer from "./chat/PDFViewer";
import TextPreview from "./chat/TextPreview";

interface IChatViewer {
  type: string;
  url: string;
}

const getComponentByType = (type: string, url: string) => {
  switch (type) {
    case "pdf":
      return (
        <div className="p-1 h-full">
          <PDFViewer fileUrl={url} />
        </div>
      );
    case "docx":
      return (
        <div className="p-1 h-full">
          <DOCXViewer fileUrl={url} />
        </div>
      );
    case "xlsx":
    case "csv":
      return (
        <div className="p-9 h-full">
          <ExcelPreview url={url} />
        </div>
      );
    case "pptx":
      return (
        <div className="p-1 h-full">
          <PDFViewer fileUrl={url} />
        </div>
      );
    default:
      return (
        <div className="p-1 h-full">
          <TextPreview url={url} />
        </div>
      );
  }
};

const ChatViewer = ({ url, type }: IChatViewer) => {
  return <div className="h-full w-full bg-base-dark-secondary">{getComponentByType(type, url)}</div>;
};

export default ChatViewer;
