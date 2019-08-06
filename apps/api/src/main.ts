import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import * as tree from 'directory-tree';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const globalPrefix = 'api';
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const port = process.env.port || 3333;

  app.setGlobalPrefix(globalPrefix);
  app.useStaticAssets({
    root: path.join(__dirname, '../nxpkg'),
    prefix: '/',
  });

  // const t = tree(path.resolve(__dirname, '..', '..', '..', '..'), {
  //   exclude: [/node_modules/]
  // });
  // console.log(JSON.stringify(t, null, 4));

  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port); // + '/' + globalPrefix);
  });
}

bootstrap();
