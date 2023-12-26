const Product  = require('../models/products')
exports.getAddProduct = async (req, res) => {
  res.render("admin/add-product", {
    title: "add-product",
    path: req.path,
    editing: false,
  });
};
exports.postAddProduct = async(req,res)=>{
    console.log(req.body)
    // const title  = req.body.title
    // const price = req.body.price
    // const product = await Product.create({
    //     title,
    //     price
    // })
    // await product.save()
    // console.log("create user", product)
    res.redirect('/')
}