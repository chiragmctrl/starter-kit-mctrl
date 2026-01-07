"use client";
import { toast } from "sonner";
import { api } from "@/trpc/react";
import useSession from "@/hooks/useSession";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePreview } from "@/redux/features/chatSlice";

interface DocumentDisplayI {
  keyUrl: string;
  type: string;
}

const DocumentDisplay = ({ keyUrl, type }: DocumentDisplayI) => {
  const { user, session } = useSession();
  const getDocumentUrl = api.chat.getPresignedUrlForDocument.useMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (keyUrl) {
      getPreviewUrl();
    }
  }, [keyUrl]);

  const onDownloadDocument = async () => {
    try {
      const response = await fetch(`/api/chat-document/download?key=${encodeURIComponent(keyUrl)}`);

      if (!response.ok) {
        throw new Error("Failed to download document");
      }

      // Get the filename from the Content-Disposition header
      const contentDisposition = response.headers.get("Content-Disposition");
      let filename = "document.pdf";
      if (contentDisposition) {
        const matches = /filename="([^"]+)"/.exec(contentDisposition);
        if (matches && matches[1]) {
          filename = matches[1];
        }
      }

      // Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading document:", error);
      toast.error("Failed to download document. Please try again.");
    }
  };

  const getPreviewUrl = async () => {
    try {
      const key = keyUrl.split("/")[1] as string;
      const { presignedUrl } = await getDocumentUrl.mutateAsync({
        key: key,
        orgId: session?.activeOrganizationId as string,
        userId: user?.id as string
      });
      const isOtherDoc = ["docx", "xlsx"].includes(type);
      let previewUrl = presignedUrl ?? null;
      if (isOtherDoc) {
        previewUrl = `/api/chat-document/get?key=${key}&type=${type}`;
      }

      dispatch(setActivePreview({ url: previewUrl, type }));
    } catch (error) {
      console.error("Error downloading document:", error);
      toast.error("Failed to download document. Please try again.");
    }
  };

  return (
    <div className="mt-2">
      <div className="text-base text-white">Your document is ready.</div>
      <div className="flex items-center gap-2">
        <div className="my-3 text-base-link font-medium hover:underline cursor-pointer text-base" onClick={onDownloadDocument}>
          Download the document
        </div>
      </div>
    </div>
  );
};

export default DocumentDisplay;
