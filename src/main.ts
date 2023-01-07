import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule,DocumentBuilder} from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'
import {ValidationPipe} from '@nestjs/common'
const PORT = process.env.PORT || 8080
async function start() {
  try {
    const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Ishonch571 market')
  .setDescription('REST API and Others')
  .setVersion('1.0.0')
  .addTag('NodeJs,NestJs,Sequelize,Postgres')
  .build()

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('/api/docs',app,document)
  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(PORT,()=> {
    console.log(`Server is running at ${PORT}`)
  });
  } catch (error) {
    throw new Error(error)
  }
}
start();
