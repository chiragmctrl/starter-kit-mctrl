"use client";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { Loader } from "../ai-elements/loader";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer({ fileUrl }: { fileUrl: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const goToPage = (page: number) => {
    if (page >= 1 && page <= numPages) {
      setPageNumber(page);
    }
  };

  return (
    <div className="h-full">
      <div>
        <Document
          loading={
            <div className="h-full mt-48 text-center">
              <Loader size={30} />
            </div>
          }
          className={"rounded-lg overflow-hidden"}
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>

      {numPages > 1 && (
        <Pagination className="mt-2 text-white">
          <PaginationContent>
            {/* Previous */}
            <PaginationItem className="cursor-pointer hover:bg-base-hover">
              <PaginationPrevious
                onClick={() => goToPage(pageNumber - 1)}
                className={pageNumber === 1 ? "pointer-events-none cursor-not-allowed opacity-50" : "hover:bg-base-hover text-white hover:text-white"}
              />
            </PaginationItem>

            {/* Page numbers */}
            {Array.from({ length: numPages }).map((_, index) => {
              const page = index + 1;
              const isActive = page === pageNumber;

              // Optional: limit visible page numbers
              if (page !== 1 && page !== numPages && Math.abs(page - pageNumber) > 1) {
                return null;
              }

              return (
                <PaginationItem className="cursor-pointer" key={page}>
                  <PaginationLink
                    className={`hover:bg-base-hover text-white hover:text-base-text-color ${isActive ? "bg-base-active-option! border-none" : ""}`}
                    isActive={isActive}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {numPages > 5 && pageNumber < numPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {/* Next */}
            <PaginationItem className="cursor-pointer">
              <PaginationNext
                onClick={() => goToPage(pageNumber + 1)}
                className={pageNumber === numPages ? "pointer-events-none cursor-not-allowed opacity-50" : "hover:bg-base-hover text-white hover:text-white"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
