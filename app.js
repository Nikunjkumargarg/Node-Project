const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hello javascript</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("<html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    fs.writeFileSync("output.txt", "hello");
    res.writeHead(302, { location: "/" });
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>Hello javascript</title></head>");
  res.write("<body>Nikunj this side learning nodejs</body>");
  res.write("<html>");
  res.end();
});

server.listen(3000);
