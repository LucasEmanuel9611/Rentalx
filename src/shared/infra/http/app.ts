import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "reflect-metadata";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

import createConnection from "@shared/infra/typeorm";

import { AppError } from "@shared/errors/AppError";
import "../../container";

createConnection();
const app = express();
const port = 3333;

app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`,
  });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app, port };
