import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const configService: ConfigService = app.get(ConfigService);

  const port = configService.get<number>('PORT');
  await app.listen(port ? port : 3000, () => {
    console.log('[WEB]', `${configService.get<string>('BASE_URL')}:${port}`);
  });
}
bootstrap();
