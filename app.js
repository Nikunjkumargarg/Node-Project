const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./router/adminRoutes");
const shopRouter = require("./router/shopRoutes");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404page.html"));
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});