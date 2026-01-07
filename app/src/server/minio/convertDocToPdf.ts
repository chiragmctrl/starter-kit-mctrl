import libre from "libreoffice-convert";

export function convertDocToPdf(buffer: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    libre.convert(buffer, ".pdf", undefined, (err, done) => {
      if (err) return reject(err);
      resolve(done as Buffer);
    });
  });
}
