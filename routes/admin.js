const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admin");
router.get("/add-product", adminControllers.getAddProduct);
router.post("/add-product", adminControllers.postAddProduct);

router.get("/admin", adminControllers.getDsh);

router.post("/delete/:prodId", adminControllers.delete);

router.get("/edit-product/:prodId", adminControllers.getEdit);
router.post('/edit-product/:prodId', adminControllers.postEdit)
module.exports = router;
