import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import literatureRouter from "./routes/literature.route.js";
import cors from "cors";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/literature/", literatureRouter);
app.use("/api/auth/", authRouter);

app.get("/", (req, res) => {
  res.send("Server is working");
});
const port = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGOOSE_DATABASE)
  .then(() => {
    app.listen(port, () => {
      console.log("Cluster connected");
      console.log(`Server is connected on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Connection failed");
  });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error.";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
