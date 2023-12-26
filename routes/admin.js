const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admin");
router.get("/add-product", adminControllers.getAddProduct);
router.post("/add-product", adminControllers.postAddProduct);


router.get('/admin',adminControllers.getDsh)

router.post('/delete/:prodId', adminControllers.delete)
module.exports = router;
