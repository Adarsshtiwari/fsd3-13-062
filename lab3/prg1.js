import http from "http";

const server = http.createServer((ren,res)) => {
  res.write("Hello Client");
  res.write("<h2>My Name</h2>");
  res.write


server.listen(3000, () => {
  console.log("server is running on port 3000...");
});