import express, { NextFunction, Request, Response } from "express";
import * as Sentry from "@sentry/node";
import "express-async-errors";
import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

import createConnection from "@shared/infra/typeorm";
import { AppError } from "@shared/errors/AppError";
import "../../container";
import rateLimiter from "./middlewares/rateLimiter";

createConnection();
const app = express();
const port = 3333;

app.use(rateLimiter);

Sentry.init({
  dsn: process.env.SENTRY_URL,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Sentry.Integrations.Express({ app }),
    ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
  ],

  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use(Sentry.Handlers.errorHandler());

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

export { app, port };
