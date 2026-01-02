interface DocumentDisplayI {
  keyUrl: string;
}

const DocumentDisplay = ({ keyUrl }: DocumentDisplayI) => {
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
      alert("Failed to download document. Please try again.");
    }
  };

  return (
    <div className="mt-2">
      <div className="text-base text-white">Your document is ready.</div>
      <div className="my-3 text-base-link font-medium hover:underline cursor-pointer text-base" onClick={onDownloadDocument}>
        Download the document
      </div>
    </div>
  );
};

export default DocumentDisplay;
