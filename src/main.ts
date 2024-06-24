import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { CryptoMiddleware } from './app.crypto.middleware';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://form.expomultimix.com',
      'https://form-2024-h3x2.vercel.app',
      'https://plataforma-expomultimix.vercel.app',
    ],
    methods: 'GET,POST,OPTIONS',
    // credentials: true,
  });
  // app.use(new CryptoMiddleware().use);

  await app.listen(3002);
}
bootstrap();
