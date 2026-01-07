"use client";
import PDFViewer from "./PDFViewer";

const DOCXViewer = ({ fileUrl }: { fileUrl: string }) => {
  return (
    <div className="h-full">
      <PDFViewer fileUrl={fileUrl} />
    </div>
  );
};

export default DOCXViewer;
