exports.getAddProduct = async (req,res)=>{
    res.render('admin/add-product', {
        title : "add-product",
        path : req.path,
        editing:false
    })
}