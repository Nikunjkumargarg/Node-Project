const products = [];

exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pagetitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProducts = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/shop");
};

exports.getProducts = (req, res, next) => {
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "/shop",
    pagetitle: "Shop",
  });
};
