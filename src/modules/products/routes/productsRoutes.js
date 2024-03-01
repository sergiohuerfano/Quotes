const express = require('express')
const getProducts = require('../services/productsServices')
const router = express.Router()

// END POINTS CRUD IMPLEMENTATION

router.get('/all', getProducts.getAllProducts)
router.get('/id/:id', getProducts.getById)
router.post('/add', getProducts.addProduct)
router.put('/update', getProducts.updateProduct)
router.delete('/delete', getProducts.deleteProduct)

module.exports = router