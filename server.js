import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world how are you" });
});

app.listen(8000, () => {
  console.log("connected to the portNumber 8000");
});
