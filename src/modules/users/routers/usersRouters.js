const express = require('express')
const getUsers = require('../services/usersServices')
const router = express.Router()

// END POINTS CRUD IMPLEMENTATION

router.get('/all', getUsers.getAllUsers)
router.get('/id/:id', getUsers.getById)
router.post('/add', getUsers.addUser)
router.put('/update', getUsers.updateUser)
router.delete('/delete', getUsers.deleteUser)

// AUTHENTICATION ROUTER

router.post('/auth', getUsers.authUser)

module.exports = router