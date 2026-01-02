"use server";
import puppeteer from "puppeteer";

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
