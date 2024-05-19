const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./router/adminRoutes");
const shopRouter = require("./router/shopRoutes");
const path = require("path");
const rootDir = require("./util/path");

const app = express();
app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRouter.adminRouter);
app.use("/shop", shopRouter);
app.use((req, res, next) => {
  // res.setHeader("Set-Cookie", "myCookie=hello");
  // res.cookie("name", "nikunj");
  res.status(404).render("404");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});