import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use(categoriesRoutes);
app.use(specificationsRoutes);

app.listen(port, () => console.log("Server is runing on port " + port));
