import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";

const start = async () => {
  try {
    const port = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder().setTitle("File Place").build();
    const apiDocument = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api", app, apiDocument);
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(port, () => console.log(port + " - work"));
  } catch (e) {
    console.log(e);
  }
};
start();
