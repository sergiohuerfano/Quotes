const express = require('express')
const users = require('../src/modules/users/routers/usersRouters')
const usersAuth = require('../src/modules/users/routers/user.Auth.Routers')
const clients = require('../src/modules/clients/routes/clientsRoutes')
const products = require('../src/modules/products/routes/productsRoutes')
const quotes = require('../src/modules/quotes/routers/quotesRoutes')
const passport = require('passport')
require('../utils/auth/index')


// Base route for each DB item (Users, Clients, Products y Quotes)

const routers = (app) => {
    const baseRoute = express.Router()
    app.use(express.static('public'))
    app.use('/base', baseRoute)
    baseRoute.use('/userlog', usersAuth)
    baseRoute.use('/users', passport.authenticate('jwt', {session: false}), users)
    baseRoute.use('/clients', passport.authenticate('jwt', {session: false}), clients)
    baseRoute.use('/products', passport.authenticate('jwt', {session: false}), products)
    baseRoute.use('/quotes', passport.authenticate('jwt', {session: false}), quotes)
}

module.exports = routers

