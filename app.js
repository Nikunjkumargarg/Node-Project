const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./util/path");

const adminRouter = require("./router/adminRoutes");
const shopRouter = require("./router/shopRoutes");
const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);

app.use(errorController.get404);
//listening on port no. 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});