import * as QRCode from 'qrcode';
import { Readable } from 'stream';
import { Buffer } from 'buffer';

export async function generateQRCodeBase64(data: string): Promise<string> {
  const options = {
    type: 'png',
    errorCorrectionLevel: 'H',
    margin: 1,
    width: 200,
  };

  try {
    const qrCodeDataUrl = await QRCode.toDataURL(data, options);
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Erro ao gerar o QR Code:', error);
    throw error;
  }
}

export async function generateQRCodeImage(data: string): Promise<Buffer> {
  const options = {
    type: 'png',
    errorCorrectionLevel: 'H',
    margin: 1,
    width: 200,
  };

  try {
    const qrCodeStream = QRCode.toFileStream(
      new Readable().wrap(null),
      data,
      options,
    );
    const chunks: Buffer[] = [];

    for await (const chunk of qrCodeStream) {
      chunks.push(chunk);
    }

    return Buffer.concat(chunks);
  } catch (error) {
    console.error('Erro ao gerar o QR Code:', error);
    throw error;
  }
}
