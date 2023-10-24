import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("hello express here!");
});
app.listen(3200, () => {
  console.log("server listening and ready to go ");
});
