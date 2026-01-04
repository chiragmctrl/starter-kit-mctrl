"use server";
import { GenerateDocxInputType, GenerateExcelInputType, GeneratePptxInputType } from "@/lib/schemas/toolsSchema";
import puppeteer from "puppeteer";
import { Document, Packer, Paragraph, HeadingLevel } from "docx";
import PptxGenJS from "pptxgenjs";
import ExcelJS from "exceljs";

export async function generatePDF(htmlContent: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const styledHtmlContent = `
        <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />

  <style>
    /* 1️⃣ Remove ALL default print margins */
    @page {
      size: A4;
      margin: 0;
    }

    html, body {
      margin: 0;
      padding: 0;
      background: white;
      width: 100%;
      height: 100%;
    }

    /* 2️⃣ Printable page container */
    .page {
      box-sizing: border-box;
      width: 210mm;          /* A4 width */
      min-height: 297mm;     /* A4 height */
      padding: 20mm;         /* Your safe content padding */
      margin: 0 auto;
      background: white;
      max-width: 210mm;
      overflow-wrap: break-word;
      font-family: Arial, sans-serif;
    }

    /* 3️⃣ Prevent overflow surprises */
    * {
      box-sizing: border-box;
    }
  </style>
</head>

<body>
  <div class="page">
    ${htmlContent}
  </div>
</body>
</html>
    `;

  await page.setContent(styledHtmlContent, { waitUntil: "networkidle0" });

  // Saves the PDF in the public folder for later use.: if its not for download

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "0mm",
      right: "0mm",
      bottom: "0mm",
      left: "0mm"
    },
    preferCSSPageSize: true
  });
  await browser.close();
  return Buffer.from(pdfBuffer);
}

export async function generateDOCX(sections: GenerateDocxInputType["sections"], title: string) {
  const doc = new Document({
    sections: [
      {
        children: [
          // Document Title
          new Paragraph({
            text: title,
            heading: HeadingLevel.TITLE
          }),

          // Sections
          ...sections.flatMap((section) => {
            const content: Paragraph[] = [];

            // Section Heading
            content.push(
              new Paragraph({
                text: section.heading,
                heading: HeadingLevel.HEADING_1
              })
            );

            // Paragraphs
            section.paragraphs?.forEach((text) => {
              content.push(new Paragraph(text));
            });

            // Bullet points
            section.bullets?.forEach((text) => {
              content.push(
                new Paragraph({
                  text,
                  bullet: { level: 0 }
                })
              );
            });

            return content;
          })
        ]
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);

  return buffer;
}

export async function generateEXCEL(sheets: GenerateExcelInputType["sheets"]) {
  const workbook = new ExcelJS.Workbook();

  sheets.forEach((sheetDef) => {
    const sheet = workbook.addWorksheet(sheetDef.name);

    sheet.columns = sheetDef.columns.map((col) => ({
      header: col.header,
      key: col.key,
      width: col.width ?? 20
    }));

    sheet.getRow(1).font = { bold: true };

    sheetDef.rows.forEach((row) => {
      sheet.addRow(row);
    });

    // Apply column formatting
    sheetDef.columns.forEach((col, index) => {
      const column = sheet.getColumn(index + 1);

      if (col.type === "number") {
        column.numFmt = "#,##0";
      }

      if (col.type === "date") {
        column.numFmt = "yyyy-mm-dd";
      }
    });
  });

  const buffer = await workbook.xlsx.writeBuffer();

  return Buffer.from(buffer);
}

export async function generatePPTX(slides: GeneratePptxInputType["slides"]) {
  const pptx = new PptxGenJS();

  slides.forEach((slideData) => {
    const slide = pptx.addSlide();

    // Slide Title
    slide.addText(slideData.title, {
      x: 0.5,
      y: 0.4,
      fontSize: 28,
      bold: true
    });

    // Bullets
    if (slideData.bullets?.length) {
      slide.addText(
        slideData.bullets.map((text) => ({ text })),
        {
          x: 0.7,
          y: 1.4,
          fontSize: 16,
          bullet: true
        }
      );
    }
  });

  const buffer = (await pptx.write({
    outputType: "nodebuffer"
  })) as Buffer;

  return buffer;
}

export async function generateTEXT(content: string) {
  return Buffer.from(content, "utf-8");
}
