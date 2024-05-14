const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("hello express");
  next();
});
app.use((req, res, next) => {
  console.log("middleware testing");
});
app.listen(3000);
