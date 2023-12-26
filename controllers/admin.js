const Product  = require('../models/products')
exports.getAddProduct = async (req, res) => {
  res.render("admin/add-product", {
    title: "add-product",
    path: req.path,
    editing: false,
  });
};
exports.postAddProduct = async(req,res,nxt)=>{
    const title  = req.body.title
    const price = req.body.price
    console.log(title);
    console.log(price);
    const product = await Product.create({
        title,
        price
    })
    await product.save()
    console.log("create user", product)
    res.redirect('/')
}

exports.getDsh = async (req,res)=>{
    const products = await Product.find()
    res.render('admin/dashboard', {
        title : 'dashboard',
        path : req.path,
        products
    })
}
exports.delete = async (req,res)=>{
    const id = req.params.prodId;
    await Product.findByIdAndDelete(id)
    console.log("delete product")
    return  res.redirect('/')
}

exports.getEdit = async ( req,res)=>{
    const id = req.params.prodId
    const editMode = req.query.edit
    console.log(id)
    console.log(editMode)
}