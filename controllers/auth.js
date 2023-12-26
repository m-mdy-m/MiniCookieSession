exports.getLogin = (req,res,nxt)=>{
    res.render('login ', {
        title : 'login ',
        path : req.path,
    })
}