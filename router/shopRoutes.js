const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
const adminData = require("./adminRoutes");
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop");
});

module.exports = router;
