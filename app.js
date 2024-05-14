const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add-product", (req, res, next) => {
  res.send(`
    <form action="/product" method="POST">
      <input type="text" name="message">
      <button type="submit">click</button>
    </form>
  `);
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("hello from express");
  res.send("Hello from Express!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
