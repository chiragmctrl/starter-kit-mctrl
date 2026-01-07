import * as XLSX from "xlsx";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Activity, useEffect, useRef, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Loader } from "../ai-elements/loader";

// Dark theme for MUI DataGrid
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#212121",
      paper: "#303030"
    },
    text: {
      primary: "#c0c0c0",
      secondary: "#afafaf"
    },
    divider: "#494949"
  }
});

const ExcelPreview = ({ url }: { url: string }) => {
  const [workbook, setWorkbook] = useState<XLSX.WorkBook | null>(null);
  const [sheetNames, setSheetNames] = useState<string[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [activeSheet, setActiveSheet] = useState<string | null>(null);

  const [rows, setRows] = useState<any[]>([]);
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [gridReady, setGridReady] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Wait for container width
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      if (entries[0] && entries[0].contentRect.width > 0) {
        setGridReady(true);
        observer.disconnect();
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Load workbook once
  useEffect(() => {
    if (!url) return;

    const loadWorkbook = async () => {
      setLoader(true);
      const res = await fetch(url);
      const buffer = await res.arrayBuffer();

      if (buffer.byteLength < 100) return;

      const wb = XLSX.read(buffer, { type: "array" });

      setWorkbook(wb);
      setSheetNames(wb.SheetNames);
      setActiveSheet(wb.SheetNames[0]!);
      setLoader(false);
    };

    loadWorkbook();
  }, [url]);

  // ✅ Parse selected sheet
  useEffect(() => {
    if (!workbook || !activeSheet) return;

    const worksheet = workbook.Sheets[activeSheet]!;

    const data: any[][] = XLSX.utils.sheet_to_json(worksheet, {
      header: 1,
      blankrows: false
    });

    if (!data.length) return;

    const headers = data[0];
    const cols: GridColDef[] =
      headers?.map((h, i) => ({
        field: `col_${i}`,
        headerName: String(h ?? ""),
        flex: 1
      })) ?? [];

    const rows = data.slice(1).map((row, idx) => {
      const obj: any = { id: idx };
      row.forEach((cell, i) => {
        obj[`col_${i}`] = cell;
      });
      return obj;
    });

    setColumns(cols);
    setRows(rows);
  }, [workbook, activeSheet]);

  return (
    <>
      <Activity mode={loader === false ? "visible" : "hidden"}>
        <ThemeProvider theme={darkTheme}>
          <div
            ref={containerRef}
            style={{
              height: 500,
              width: "100%",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#303030",
              borderRadius: "8px",
              padding: "16px"
            }}
          >
            {/* ✅ Custom Sheet selector */}
            {sheetNames.length > 1 && (
              <div ref={dropdownRef} style={{ position: "relative", marginBottom: 12, maxWidth: 300 }}>
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#212121",
                    color: "#c0c0c0",
                    border: "1px solid #494949",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#6b6b6b";
                    e.currentTarget.style.backgroundColor = "#242424";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#494949";
                    e.currentTarget.style.backgroundColor = "#212121";
                  }}
                >
                  <span>{activeSheet}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{
                      transition: "transform 0.2s ease",
                      transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)"
                    }}
                  >
                    <path d="M4 6L8 10L12 6" stroke="#c0c0c0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {isDropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 4px)",
                      left: 0,
                      right: 0,
                      backgroundColor: "#212121",
                      border: "1px solid #494949",
                      borderRadius: "6px",
                      overflow: "hidden",
                      zIndex: 1000,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    {sheetNames.map((name) => (
                      <div
                        key={name}
                        onClick={() => {
                          setActiveSheet(name);
                          setIsDropdownOpen(false);
                        }}
                        style={{
                          padding: "8px 12px",
                          color: "#c0c0c0",
                          cursor: "pointer",
                          fontSize: "14px",
                          backgroundColor: activeSheet === name ? "#242424" : "transparent",
                          transition: "background-color 0.15s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff1a";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = activeSheet === name ? "#242424" : "transparent";
                        }}
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {gridReady && (
              <div style={{ flex: 1, minWidth: 0 }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSizeOptions={[25, 50, 100]}
                  disableRowSelectionOnClick
                  sx={{
                    border: "1px solid #494949",
                    borderRadius: "6px",
                    "& .MuiDataGrid-cell": {
                      borderColor: "#494949"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: "#242424",
                      borderColor: "#494949"
                    },
                    "& .MuiDataGrid-footerContainer": {
                      borderColor: "#494949",
                      backgroundColor: "#242424"
                    },
                    "& .MuiDataGrid-row:hover": {
                      backgroundColor: "#ffffff1a"
                    }
                  }}
                />
              </div>
            )}
          </div>
        </ThemeProvider>
      </Activity>
      <Activity mode={loader === true ? "visible" : "hidden"}>
        <div style={{ padding: "100px", textAlign: "center" }}>
          <Loader size={30} />
        </div>
      </Activity>
    </>
  );
};

export default ExcelPreview;
