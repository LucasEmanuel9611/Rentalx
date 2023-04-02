import express from "express";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container";

const app = express();
const port = 3333;

app.use(express.json());
app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => console.log("Server is runing on port " + port));
