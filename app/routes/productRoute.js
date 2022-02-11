const express = require("express");
const router = express.Router();
const Product = require("../controllers/productController")
router.get('/:id',Product.getProduct)
router.post('/',Product.getProduct)
router.put('/update/:id',Product.getProduct)
router.delete('/remove/:id',Product.deleteProduct)
module.exports = router;