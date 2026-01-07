"use client";
import { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Loader } from "../ai-elements/loader";
import { Shrink } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer({ fileUrl }: { fileUrl: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [inputPage, setInputPage] = useState<string>("1");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
    setInputPage("1");
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= numPages) {
      setPageNumber(page);
      setInputPage(page.toString());
    }
  };

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputPage(value);
    const pageNum = parseInt(value);
    if (pageNum >= 1 && pageNum <= numPages) {
      setPageNumber(pageNum);
    }
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3.0));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleFitToWidth = () => {
    setScale(1.0);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = "_blank";
    link.download = "document.pdf";
    link.click();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToPage(pageNumber + 1);
      } else if (e.key === "ArrowLeft") {
        goToPage(pageNumber - 1);
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pageNumber, numPages]);

  return (
    <div ref={containerRef} className="h-full flex flex-col" style={{ backgroundColor: "#212121" }}>
      {/* Toolbar */}
      <div
        style={{
          backgroundColor: "#303030",
          borderBottom: "1px solid #494949",
          padding: "8px 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          flexWrap: "nowrap"
        }}
      >
        {/* Left section - Page navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <button
            onClick={() => goToPage(pageNumber - 1)}
            disabled={pageNumber === 1}
            style={{
              padding: "4px 8px",
              backgroundColor: "#212121",
              color: "#c0c0c0",
              border: "1px solid #494949",
              borderRadius: "4px",
              cursor: pageNumber === 1 ? "not-allowed" : "pointer",
              opacity: pageNumber === 1 ? 0.5 : 1,
              fontSize: "12px",
              transition: "all 0.2s",
              minWidth: "28px"
            }}
            onMouseEnter={(e) => {
              if (pageNumber !== 1) {
                e.currentTarget.style.backgroundColor = "#242424";
                e.currentTarget.style.borderColor = "#6b6b6b";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#212121";
              e.currentTarget.style.borderColor = "#494949";
            }}
          >
            ←
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <input
              type="number"
              min="1"
              max={numPages}
              value={inputPage}
              onChange={handlePageInput}
              style={{
                width: "45px",
                padding: "4px 6px",
                backgroundColor: "#212121",
                color: "#c0c0c0",
                border: "1px solid #494949",
                borderRadius: "4px",
                textAlign: "center",
                fontSize: "12px",
                outline: "none"
              }}
            />
            <span style={{ color: "#afafaf", fontSize: "12px" }}>/ {numPages}</span>
          </div>

          <button
            onClick={() => goToPage(pageNumber + 1)}
            disabled={pageNumber === numPages}
            style={{
              padding: "4px 8px",
              backgroundColor: "#212121",
              color: "#c0c0c0",
              border: "1px solid #494949",
              borderRadius: "4px",
              cursor: pageNumber === numPages ? "not-allowed" : "pointer",
              opacity: pageNumber === numPages ? 0.5 : 1,
              fontSize: "12px",
              transition: "all 0.2s",
              minWidth: "28px"
            }}
            onMouseEnter={(e) => {
              if (pageNumber !== numPages) {
                e.currentTarget.style.backgroundColor = "#242424";
                e.currentTarget.style.borderColor = "#6b6b6b";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#212121";
              e.currentTarget.style.borderColor = "#494949";
            }}
          >
            →
          </button>
        </div>

        {/* Middle section - Zoom controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <button
            onClick={handleZoomOut}
            disabled={scale <= 0.5}
            style={{
              padding: "4px 8px",
              backgroundColor: "#212121",
              color: "#c0c0c0",
              border: "1px solid #494949",
              borderRadius: "4px",
              cursor: scale <= 0.5 ? "not-allowed" : "pointer",
              opacity: scale <= 0.5 ? 0.5 : 1,
              fontSize: "12px",
              fontWeight: "bold",
              transition: "all 0.2s",
              minWidth: "28px"
            }}
            onMouseEnter={(e) => {
              if (scale > 0.5) {
                e.currentTarget.style.backgroundColor = "#242424";
                e.currentTarget.style.borderColor = "#6b6b6b";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#212121";
              e.currentTarget.style.borderColor = "#494949";
            }}
          >
            −
          </button>

          <span
            style={{
              padding: "4px 8px",
              backgroundColor: "#212121",
              color: "#c0c0c0",
              border: "1px solid #494949",
              borderRadius: "4px",
              fontSize: "12px",
              minWidth: "50px",
              textAlign: "center"
            }}
          >
            {Math.round(scale * 100)}%
          </span>

          <button
            onClick={handleZoomIn}
            disabled={scale >= 3.0}
            style={{
              padding: "4px 8px",
              backgroundColor: "#212121",
              color: "#c0c0c0",
              border: "1px solid #494949",
              borderRadius: "4px",
              cursor: scale >= 3.0 ? "not-allowed" : "pointer",
              opacity: scale >= 3.0 ? 0.5 : 1,
              fontSize: "12px",
              fontWeight: "bold",
              transition: "all 0.2s",
              minWidth: "28px"
            }}
            onMouseEnter={(e) => {
              if (scale < 3.0) {
                e.currentTarget.style.backgroundColor = "#242424";
                e.currentTarget.style.borderColor = "#6b6b6b";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#212121";
              e.currentTarget.style.borderColor = "#494949";
            }}
          >
            +
          </button>

          <button
            onClick={handleFitToWidth}
            style={{
              padding: "4px 10px",
              backgroundColor: "#212121",
              color: "#c0c0c0",
              border: "1px solid #494949",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "11px",
              transition: "all 0.2s",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#242424";
              e.currentTarget.style.borderColor = "#6b6b6b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#212121";
              e.currentTarget.style.borderColor = "#494949";
            }}
          >
            Fit Width
          </button>
        </div>

        {/* Right section - Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <button
            onClick={handleDownload}
            style={{
              padding: "4px 10px",
              backgroundColor: "#212121",
              color: "#c0c0c0",
              border: "1px solid #494949",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "11px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              transition: "all 0.2s",
              whiteSpace: "nowrap"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#242424";
              e.currentTarget.style.borderColor = "#6b6b6b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#212121";
              e.currentTarget.style.borderColor = "#494949";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 10.5L4.5 7L5.55 5.95L7.25 7.65V2H8.75V7.65L10.45 5.95L11.5 7L8 10.5ZM3.5 14C3.0875 14 2.73438 13.8531 2.44063 13.5594C2.14688 13.2656 2 12.9125 2 12.5V10H3.5V12.5H12.5V10H14V12.5C14 12.9125 13.8531 13.2656 13.5594 13.5594C13.2656 13.8531 12.9125 14 12.5 14H3.5Z"
                fill="#c0c0c0"
              />
            </svg>
            Download
          </button>

          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
            style={{
              padding: "4px 8px",
              backgroundColor: "#212121",
              color: "#c0c0c0",
              border: "1px solid #494949",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              minWidth: "28px",
              justifyContent: "center"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#242424";
              e.currentTarget.style.borderColor = "#6b6b6b";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#212121";
              e.currentTarget.style.borderColor = "#494949";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              {isFullscreen ? (
                <Shrink size={15} />
              ) : (
                <path d="M3.5 9H2V14H7V12.5H3.5V9ZM2 7H3.5V3.5H7V2H2V7ZM12.5 12.5H9V14H14V9H12.5V12.5ZM9 2V3.5H12.5V7H14V2H9Z" fill="#c0c0c0" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* PDF Content */}
      <div
        style={{
          flex: 1,
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "24px",
          backgroundColor: "#181818"
        }}
        className="dark-scrollbar"
      >
        <div
          style={{
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.5)",
            borderRadius: "8px",
            overflow: "hidden"
          }}
        >
          <Document
            loading={
              <div style={{ padding: "100px", textAlign: "center" }}>
                <Loader size={30} />
              </div>
            }
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        </div>
      </div>
    </div>
  );
}
