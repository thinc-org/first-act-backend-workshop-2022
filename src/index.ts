import express from "express";
import courseRouter from "./routes/course";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = Number.parseInt(process.env.PORT ?? "3000");
var corsOptions = {
  origin: "*",
};

app.use(cors());

app.use(express.json());

app.use(courseRouter);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
