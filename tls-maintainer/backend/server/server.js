import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { databaseRouter } from "./database.routes.js";

dotenv.config({ path: "./config.env" });
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/database", databaseRouter);
 
app.listen(port, () => {                                        // perform a database connection when server starts
  console.log(`Server is running on port: ${port}`);
});