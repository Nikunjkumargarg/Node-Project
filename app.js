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
    res.write("</html>"); // Closing HTML tag was missing here
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      // Listen for data on the request object (not response)
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      // End event of request indicates all data has been received
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1]; // Extract message properly

      try {
        fs.writeFileSync("output.txt", message);
        console.log("Data written to output.txt successfully.");
      } catch (error) {
        console.error("Error writing to output.txt:", error);
      }

      res.writeHead(302, { Location: "/" }); // Redirect after processing request
      res.end(); // End response after processing request
    });
    return; // Return to prevent further execution before request body is fully parsed
  }
  res.write("<html>");
  res.write("<head><title>Hello javascript</title></head>");
  res.write("<body>Nikunj this side learning nodejs</body>");
  res.write("</html>"); // Closing HTML tag was missing here
  res.end(); // End response
});

server.listen(3000);
