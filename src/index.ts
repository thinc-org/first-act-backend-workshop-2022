import express from "express";
import courseRouter from "./routes/course";

const app = express();
const port = 3000;

app.use(express.json());

app.use(courseRouter);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
