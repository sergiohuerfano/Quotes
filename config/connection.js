const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ZTechnology-crm'
})

connection.connect((error) => {
    if (error) {
        console.error(error)
    } else {
        console.log('Connection Success')
    }
})

module.exports =  connection