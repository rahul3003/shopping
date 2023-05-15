const express = require('express');
const router = express.Router();
const { createProduct } = require("../controller/productCtrl")

router.post("/createProduct", createProduct)

module.exports = router;