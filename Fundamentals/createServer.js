import http from "http";

const server = http.createServer({}, (req, res) => {
  res.end("data");
});

server.listen(5000, () => {
  console.log("Server started");
});
