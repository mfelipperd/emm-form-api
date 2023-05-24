import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CryptoMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const originalSend = res.send;
    res.send = (body) => {
      const criptografado = CryptoJS.AES.encrypt(body, 'lipnam12').toString();
      const descriptografado = CryptoJS.AES.decrypt(
        criptografado,
        'lipnam12',
      ).toString(CryptoJS.enc.Utf8);
      return originalSend.call(res, criptografado);
    };
    next();
  }
}
