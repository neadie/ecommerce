const express = require('express');
// ✅ Destructure if it's part of an exported object
const { getProducts } = require('../controller/productController');

const router = express.Router();

router.get('/', getProducts);

module.exports = router;

