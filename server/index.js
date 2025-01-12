import express from "express";
import mongoose from "mongoose";

const app = express();
app.get("/", (req, res) => {
  res.send("Server is working");
});

const port = process.env.PORT || 3001;

mongoose
  .connect(
    "mongodb+srv://acharyarajanraj11:LGDoU7GBqKBNXNCT@noska.ne3je.mongodb.net/?retryWrites=true&w=majority&appName=NOSKA"
  )
  .then(() => {
    app.listen(port, () => {
      console.log("Cluster connected");
      console.log(`Server is connected on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("Connection failed");
  });
