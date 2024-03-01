const express = require('express')
const getClients = require('../services/clientsServices')
const router = express.Router()

// END POINTS CRUD IMPLEMENTATION

router.get('/all', getClients.getAllClients)
router.get('/id/:id', getClients.getById)
router.post('/add', getClients.addClient)
router.put('/update', getClients.updateClient)
router.delete('/delete', getClients.deleteClient)

module.exports = router