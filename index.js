const express = require("express");
const path = require("path");
const app = express();

// we can use a get,post,put,patch on the same path

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/something", (req, res) => {
  res.send("Some thing component here!!");
});

app.post("/something", (req, res) => {
  res.send(" This is  usually not visible");
});
const port = 3200;
app.listen(port, () => {
  console.log(`server listening and ready to go ${port} `);
});
