import { useEffect, useState } from "react";
import { Loader } from "../ai-elements/loader";
import { Download, Copy, Check } from "lucide-react";

const TextPreview = ({ url }: { url: string }) => {
  const [content, setContent] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!url) return;

    const loadContent = async () => {
      const res = await fetch(url);
      const text = await res.text();
      setContent(text);
    };

    loadContent();
  }, [url]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.download = "document.txt";
    link.click();
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStats = () => {
    const lines = content.split("\n").length;
    const words = content
      .trim()
      .split(/\s+/)
      .filter((w) => w.length > 0).length;
    const chars = content.length;
    return { lines, words, chars };
  };

  if (content.trim().length === 0) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        <Loader size={30} />
      </div>
    );
  }

  const stats = getStats();

  return (
    <div className="h-full flex flex-col" style={{ backgroundColor: "#212121" }}>
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
        {/* Left section - Stats */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "11px", color: "#afafaf" }}>
          <span>Lines: {stats.lines}</span>
          <span>Words: {stats.words}</span>
          <span>Characters: {stats.chars}</span>
        </div>

        {/* Right section - Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <button
            onClick={handleCopy}
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
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied!" : "Copy"}
          </button>

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
            <Download size={14} />
            Download
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          overflow: "auto",
          backgroundColor: "#181818",
          padding: "16px"
        }}
        className="dark-scrollbar"
      >
        <pre
          style={{
            backgroundColor: "#303030",
            color: "#c0c0c0",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid #494949",
            overflow: "auto",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            fontFamily: "var(--font-mono), monospace",
            fontSize: "13px",
            lineHeight: "1.6",
            margin: 0,
            minHeight: "100%"
          }}
        >
          {content}
        </pre>
      </div>
    </div>
  );
};

export default TextPreview;
