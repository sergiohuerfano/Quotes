const connection = require('../../../../config/connection')

// CRUD IMPLEMENTATION

exports.getAllClients = (req, res)=>{
    const sqlbd = 'SELECT * FROM client_tb'
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
    const sqlbd = `SELECT * FROM client_tb WHERE idClient = ${id}`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.addClient = (req, res)=>{
    const {numberIdClient, nameClient, nameContactClient, emailClient, phoneClient, otherDataClient} = req.body;
    const sqlbd = `INSERT INTO client_tb (numberIdClient, nameClient, nameContactClient, emailClient, phoneClient, otherDataClient) VALUES ('${numberIdClient}', '${nameClient}', '${nameContactClient}', '${emailClient}', '${phoneClient}', '${otherDataClient})`;
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.updateClient = (req, res)=>{
    const {idClient, numberIdClient, nameClient, nameContactClient, emailClient, phoneClient, otherDataClient} = req.body;
    const sqlbd = `UPDATE client_tb SET numberIdClient = '${numberIdClient}', nameClient = '${nameClient}', nameContactClient = '${nameContactClient}', emailClient = '${emailClient}', phoneClient = '${phoneClient}', otherDataClient = '${otherDataClient}' WHERE idClient = '${idClient}'`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.deleteClient = (req, res)=>{
    const {idClient} = req.body;
    const sqlbd = `DELETE FROM client_tb WHERE idClient = '${idClient}'`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json("DELETE COMPLETED")
        }
    })
}