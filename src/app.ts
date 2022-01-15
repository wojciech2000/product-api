import express from "express";
import { PORT } from "./config/env";
import connection from "./db/connect";
import { router } from "./routes";

const app = express();

app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  connection();
  app.use(router);
});
