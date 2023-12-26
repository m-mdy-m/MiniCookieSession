const Product = require('../models/products')
exports.getHome = async ( req,res,nxt)=>{
    const products = await Product.find()
    res.render('home', {
        title : "home",
        path : req.path,
        products,
    })
}