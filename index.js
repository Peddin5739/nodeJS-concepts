const express = require("express");
const path = require("path");
const app = express();
const bodyparser = require("body-parser");

app.use("/static", express.static(path.resolve(__dirname, "public")));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.get("/something", (req, res) => {
  res.send("Something component here!!");
});

app.post("/data", (req, res) => {
  console.log(req.body);
  res.json({ status: "ok" });
});

const port = 3200;
app.listen(port, () => {
  console.log(`Server listening and ready to go at http://localhost:${port}`);
});
