const express = require('express')
const getQuotes = require('../services/quotesServices')
const router = express.Router()

// END POINTS CRUD IMPLEMENTATION

router.get('/all', getQuotes.getAllQuotes)
router.get('/id/:id', getQuotes.getById)
router.post('/add', getQuotes.addQuote)
router.put('/update', getQuotes.updateQuote)
router.delete('/delete', getQuotes.deleteQuote)

module.exports = router