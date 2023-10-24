import express from "express";
const app = express();

// we can use a get,post,put,patch on the same path

app.get("/", (req, res) => {
  res.send("hello express here!");
});

app.get("/something", (req, res) => {
  res.send("Some thing component here!!");
});

app.post("/something", (req, res) => {
  res.send(" This is  usually not visible");
});
app.listen(3200, () => {
  console.log("server listening and ready to go ");
});
