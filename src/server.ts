import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use(categoriesRoutes);

app.get("/", (req, res) => {
  return res.json({ message: "Hello, world!" });
});

app.post("/courses", (req, res) => {
  const { name } = req.body;

  return res.json({ name });
});

app.listen(port, () => console.log("Server is runing on port " + port));
