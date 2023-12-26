const User = require("../models/user");
exports.getLogin = (req, res, nxt) => {
  res.render("shop/login", {
    title: "login",
    path: req.path,
    isAuthenticated: false,
  });
};
exports.postLogin = async (req, res, nxt) => {
  const user = await User.findById("658afb8f4184970c05e8875d");
  req.session.isLogin = true;
  req.session.user = user;
  await req.session.save();
  req.redirect("/");
};
