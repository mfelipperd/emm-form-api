import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CryptoMiddleware } from './app.crypto.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'hhttps://form.expomultimix.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.use(new CryptoMiddleware().use);

  await app.listen(3001);
}
bootstrap();
