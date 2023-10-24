const express = require("express");
const path = require("path");
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

app.get("/something", (req, res) => {
  res.send("Something component here!!");
});

app.post("/something", (req, res) => {
  res.send("This is usually not visible on POST request");
});

const port = 3200;
app.listen(port, () => {
  console.log(`Server listening and ready to go at http://localhost:${port}`);
});
