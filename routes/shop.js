const path = require('path');

const express = require('express');
const pc=require('../controllers/productsController')
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', pc.getAllProducts);

module.exports = router;
