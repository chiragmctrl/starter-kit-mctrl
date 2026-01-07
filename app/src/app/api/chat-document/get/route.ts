import { MINIO_BUCKET } from "@/server/minio/client";
import { NextRequest, NextResponse } from "next/server";
import { getObjectBuffer } from "@/server/ai/helper";
import { convertDocToPdf } from "@/server/minio/convertDocToPdf";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;
    const key = searchParams.get("key");
    const type = searchParams.get("type");

    if (!key) {
      return NextResponse.json({ error: "Missing key parameter" }, { status: 400 });
    }

    const buffer = await getObjectBuffer(MINIO_BUCKET, key);
    const pdfBuffer = await convertDocToPdf(buffer);
    const filename = key.replace(/\.[^/.]+$/, "");

    if (type === "xlsx") {
      return new NextResponse(buffer as BodyInit, {
        headers: {
          "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "Content-Disposition": `inline; filename="${key}"`,
          "Content-Length": buffer.byteLength.toString()
        }
      });
    }
    if (["docx", "pptx"].includes(type ?? "")) {
      return new NextResponse(pdfBuffer as BodyInit, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `inline; filename="${filename}.pdf"`,
          "Content-Length": pdfBuffer.byteLength.toString()
        }
      });
    }

    const text = buffer.toString("utf-8");

    return new NextResponse(text, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": "inline"
      }
    });
  } catch (error) {
    console.error("Error downloading chat document:", error);
    return NextResponse.json({ error: "Failed to download document" }, { status: 500 });
  }
}
