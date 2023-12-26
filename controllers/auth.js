exports.getLogin = (req, res, nxt) => {
  res.render("shop/login", {
    title: "login",
    path: req.path,
  });
};
