const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const pc=require('../controllers/productsController')


// /admin/add-product => POST
router.post('/add-product', pc.postProducts);
router.post('/add-user',pc.addUsers)
router.delete('/:id',pc.deleteItem)
router.get('/all-user',pc.getAllUsers)
router.post('/add-to-cart/:id',pc.addToCart)
router.get('/all-cart-items',pc.getAllCartItems)
router.delete('/cart/:id',pc.deleteCartItem)


exports.routes = router;

