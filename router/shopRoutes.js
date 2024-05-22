const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");
//get route
router.get("/", productsController.getProducts);
module.exports = router;

