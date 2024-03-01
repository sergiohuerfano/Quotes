const connection = require('../../../../config/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

// CRUD IMPLEMENTATION

exports.getAllUsers = (req, res)=>{
    const sqlbd = 'SELECT * FROM user_tb'
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.getById = (req, res)=>{
    const {id} = req.params;
    const sqlbd = `SELECT * FROM user_tb WHERE idUser = ${id}`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.addUser = async (req, res)=>{
    const {userName, userPassword, userType, userEmail, userStatus, errorAuth} = req.body;

    // after install bcrypt on Terminal (npm i bcrypt), I create a password shield
    const passwordShield = await bcrypt.hash(userPassword, 8)

    const sqlbd = `INSERT INTO user_tb (userName, userPassword, userType, userEmail, userStatus, errorAuth) VALUES ('${userName}', '${passwordShield}', '${userType}', '${userEmail}', '${userStatus}', '${errorAuth}')`;
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.updateUser = (req, res)=>{
    const {idUser, userName, userPassword, userType, userEmail, userStatus, errorAuth} = req.body;
    const sqlbd = `UPDATE user_tb SET userName = '${userName}', userPassword = '${userPassword}', userType = '${userType}', userEmail = '${userEmail}', userStatus = '${userStatus}', errorAuth = '${errorAuth}' WHERE idUser = '${idUser}'`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.deleteUser = (req, res)=>{
    const {idUser} = req.body;
    const sqlbd = `DELETE FROM user_tb WHERE idUser = '${idUser}'`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json("DELETE COMPLETED")
        }
    })
}

// FOR AUTH

exports.authUser = async (req, res)=>{
    const {userPassword: password, userEmail} = req.body;
    const secretKey = process.env.SECRET_AUTH
    const credentials = {
        email: userEmail,
        password: password
    }
    const sqlbd = `SELECT * FROM user_tb WHERE userEmail = '${userEmail}'`;
    connection.query(sqlbd, async (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            if (rows.length) {
                const {userPassword} = rows[0]
                const comparePass = await bcrypt.compare(password, userPassword)
                const token = jwt.sign(credentials, secretKey) 
                // console.log(password === userPassword ? true : false);
                // console.log('resultado: ', comparePass);
                if (comparePass) {
                    res.json({
                        name: rows[0].userName,
                        email: rows[0].userEmail,
                        token: token 
                    })
                } else {
                    res.json("PASSWORD ERROR")
                }
            } else {
                res.json("USER NOT FOUND")
            }
        }
    })
}