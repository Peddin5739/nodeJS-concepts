import http from "http";

const server = http.createServer((req, res) => {
  //send response body
  res.write("hello client server created ");
  console.log(req.url);
  res.end();
});
server.listen(3200, () => {
  console.log("server running at port 3200 and localhost");
});
