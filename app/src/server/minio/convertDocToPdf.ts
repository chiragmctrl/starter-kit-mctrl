import libre from "libreoffice-convert";
import { promisify } from "util";

const convert = promisify(libre.convert);

export function convertDocToPdf(docBuffer: Buffer): Promise<Buffer> {
  return convert(docBuffer, ".pdf", undefined);
}
