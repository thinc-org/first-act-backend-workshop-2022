import express from "express";
import courseRouter from "./routes/course";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = Number.parseInt(process.env.PORT ?? "3000");

app.use(express.json());

app.use(courseRouter);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
