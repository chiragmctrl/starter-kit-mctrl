import { minioClient } from "@/server/minio/client";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
  try {
    // Authenticate user

    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (!session?.session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check if session is expired
    const expiresAt = new Date(session.session.expiresAt);
    if (!session.session.expiresAt || Number.isNaN(expiresAt.getTime()) || expiresAt <= new Date()) {
      return NextResponse.json({ error: "Session expired" }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const key = searchParams.get("key");

    if (!key) {
      return NextResponse.json({ error: "Missing key parameter" }, { status: 400 });
    }

    const [bucket, ...objectNameParts] = key.split("/");
    const objectName = objectNameParts.join("/");

    if (!bucket || !objectName) {
      return NextResponse.json({ error: "Invalid key format" }, { status: 400 });
    }

    // Get the object from MinIO
    const stream = await minioClient.getObject(bucket, objectName);

    // Convert stream to buffer
    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    // Get object metadata to determine content type
    const stat = await minioClient.statObject(bucket, objectName);
    const contentType = stat.metaData?.["content-type"] || "application/octet-stream";

    // Return the file with appropriate headers
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${objectName}"`,
        "Content-Length": buffer.length.toString()
      }
    });
  } catch (error) {
    console.error("Error downloading chat document:", error);
    return NextResponse.json({ error: "Failed to download document" }, { status: 500 });
  }
}
