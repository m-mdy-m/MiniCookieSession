exports.getHome = async ( req,res,nxt)=>{
    res.render('home', {
        title : "home",
        path : req.path
    })
}