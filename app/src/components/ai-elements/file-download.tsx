"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DownloadIcon, FileIcon, FileTextIcon, FileSpreadsheetIcon, SlidersHorizontalIcon } from "lucide-react";
import type { ComponentProps } from "react";

export type FileDownloadProps = ComponentProps<"div"> & {
  fileId: string;
  fileName?: string;
  fileType?: string;
  filePath?: string;
};

const getFileIcon = (fileName: string) => {
  const ext = fileName.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "pdf":
      return <FileTextIcon className="size-5 text-red-400" />;
    case "docx":
    case "doc":
      return <FileTextIcon className="size-5 text-blue-400" />;
    case "xlsx":
    case "xls":
      return <FileSpreadsheetIcon className="size-5 text-green-400" />;
    case "pptx":
    case "ppt":
      return <SlidersHorizontalIcon className="size-5 text-orange-400" />;
    default:
      return <FileIcon className="size-5 text-gray-400" />;
  }
};

const getFileType = (fileName: string) => {
  const ext = fileName.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "pdf":
      return "PDF Document";
    case "docx":
    case "doc":
      return "Word Document";
    case "xlsx":
    case "xls":
      return "Excel Spreadsheet";
    case "pptx":
    case "ppt":
      return "PowerPoint Presentation";
    default:
      return "File";
  }
};

export const FileDownload = ({ className, fileId, fileName = "download", fileType, filePath, ...props }: FileDownloadProps) => {
  const displayName = fileName || filePath?.split("/").pop() || "download";
  const displayType = fileType || getFileType(displayName);

  const handleDownload = async () => {
    try {
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  return (
    <div className={cn("flex items-center gap-3 rounded-lg border border-white/10 bg-black/20 p-4 mb-4", className)} {...props}>
      <div className="shrink-0">{getFileIcon(displayName)}</div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">{displayName}</p>
        <p className="text-xs text-white/50">{displayType}</p>
      </div>
      <Button onClick={handleDownload} size="sm" className="shrink-0 bg-base-link hover:bg-base-link/80 text-white">
        <DownloadIcon className="size-4 mr-2" />
        Download
      </Button>
    </div>
  );
};
