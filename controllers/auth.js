const User = require("../models/user");
exports.getLogin = (req, res, nxt) => {
  res.render("shop/login", {
    title: "login",
    path: req.path,
    isAuthenticated: req.session.isLogin,
  });
};
exports.postLogin = async (req, res, nxt) => {
  const user = await User.findById("658afb8f4184970c05e8875d");
  req.session.isLogin = true;
  req.session.user = user;
  await req.session.save();
  console.log('session is add');
  res.redirect("/");
};
exports.postLogout = async (req,res,nxt)=>{
    req.session.destroy( ()=>{
        console.log('session is remove')
        res.redirect('/')
    })
}