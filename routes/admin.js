const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const pc=require('../controllers/productsController')


// /admin/add-product => POST
router.post('/add-product', pc.postProducts);



exports.routes = router;

