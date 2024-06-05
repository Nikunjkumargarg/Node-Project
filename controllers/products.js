const Product = require("../models/product");

exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pagetitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/shop");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      docTitle: "Shop",
      path: "/shop",
      pagetitle: "Shop",
    });
  });
  
};
