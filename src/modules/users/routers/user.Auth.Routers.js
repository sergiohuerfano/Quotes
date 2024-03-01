const express = require('express')
const getUsers = require('../services/usersServices')
const router = express.Router()


router.post('/auth', getUsers.authUser)
router.post('/register', getUsers.addUser)

module.exports = router