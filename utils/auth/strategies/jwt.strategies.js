const {Strategy, ExtractJwt} = require('passport-jwt');
const secretKey = process.env.SECRET_AUTH
require('dotenv').config()

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secretKey
}

const jwtStrategie = new Strategy(option, (payload, done) =>{
    return done(null, payload)
})

module.exports = jwtStrategie