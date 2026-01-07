"use client";
import DOCXViewer from "./chat/DOCXViewer";
import ExcelPreview from "./chat/ExcelPreview";
import PDFViewer from "./chat/PDFViewer";

interface IChatViewer {
  type: string;
  url: string;
}

const getComponentByType = (type: string, url: string) => {
  switch (type) {
    case "pdf":
      return (
        <div className="p-14 pb-0 pt-8 h-full">
          <PDFViewer fileUrl={url} />
        </div>
      );
    case "docx":
      return (
        <div className="p-14 pb-0 pt-8 h-full">
          <DOCXViewer fileUrl={url} />
        </div>
      );
    case "xlsx":
      return (
        <div className="p-9 h-full">
          <ExcelPreview url={url} />
        </div>
      );

    default:
      break;
  }
};

const ChatViewer = ({ url, type }: IChatViewer) => {
  return <div className="h-full w-full bg-base-dark-secondary">{getComponentByType(type, url)}</div>;
};

export default ChatViewer;
