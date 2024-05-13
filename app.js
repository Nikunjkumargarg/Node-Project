const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.write("<html>");
  res.write("<head><title>Hello javascript</title></head>");
  res.write("<body>Nikunj this side learning nodejs</body>");
  res.write("<html>");
  res.end();
});

server.listen(3000);
