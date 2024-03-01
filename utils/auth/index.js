const passport = require('passport')
const jwtStrategie = require('./strategies/jwt.strategies')

passport.use(jwtStrategie);