const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./router/adminRoutes");
const shopRouter = require("./router/shopRoutes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);
app.use((req, res, next) => {
  res.status(404).send(`<h1>Page not found</h1>`);
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});