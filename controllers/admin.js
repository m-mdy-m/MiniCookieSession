const Product = require("../models/products");
exports.getAddProduct = async (req, res) => {
  res.render("admin/add-product", {
    title: "add-product",
    path: req.path,
    editing: false,
    isAuthenticated : req.session.isLogin
});
};
exports.postAddProduct = async (req, res, nxt) => {
  const title = req.body.title;
  const price = req.body.price;
  const userId = req.user;
  const product = await Product.create({
    title,
    price,
    userId,
  });
  await product.save();
  console.log("create user", product);
  res.redirect("/");
};

exports.getDsh = async (req, res) => {
  const products = await Product.find();
  res.render("admin/dashboard", {
    title: "dashboard",
    path: req.path,
    products,
    isAuthenticated : req.session.isLogin
});
};
exports.delete = async (req, res) => {
  const id = req.params.prodId;
  await Product.findByIdAndDelete(id);
  console.log("delete product");
  return res.redirect("/");
};

exports.getEdit = async (req, res) => {
  const id = req.params.prodId;
  const editing = req.query.edit;
  const product = await Product.findById(id);
  res.render("admin/add-product", {
    title: "updatePro",
    path: req.path,
    product,
    editing,
    isAuthenticated : req.session.isLogin
});
};
exports.postEdit = async (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const id = req.params.prodId;
  const product = await Product.findByIdAndUpdate(id, {
    title,
    price,
  });
  console.log("update user");
  await product.save();
  return res.redirect("/");
};
