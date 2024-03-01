const connection = require('../../../../config/connection')

// CRUD IMPLEMENTATION

exports.getAllQuotes = (req, res)=>{
    const sqlbd = 'SELECT * FROM quote_tb'
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
    const sqlbd = `SELECT * FROM quote_tb WHERE idQuote = ${id}`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.addQuote = (req, res)=>{
    const {numQuote, dateQuote, idUser, idClient, idProduct, deliveryCost, discountPercentage, discountNumber} = req.body;
    const sqlbd = `INSERT INTO quote_tb (numQuote, dateQuote, idUser, idClient, idProduct, deliveryCost, discountPercentage, discountNumber) VALUES ('${numQuote}', '${dateQuote}', '${idUser}', '${idClient}', '${idProduct}', '${deliveryCost}', '${discountPercentage}', '${discountNumber}')`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.updateQuote = (req, res)=>{
    const {idQuote, numQuote, dateQuote, idUser, idClient, idProduct, deliveryCost, discountPercentage, discountNumber} = req.body;
    const sqlbd = `UPDATE quote_tb SET numQuote = '${numQuote}', dateQuote = '${dateQuote}', idUser = '${idUser}', idClient = '${idClient}', idProduct = '${idProduct}', deliveryCost = '${deliveryCost}', discountPercentage = '${discountPercentage}', discountNumber = '${discountNumber}' WHERE idQuote = '${idQuote}'`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.deleteQuote = (req, res)=>{
    const {idQuote} = req.body;
    const sqlbd = `DELETE FROM quote_tb WHERE idQuote = '${idQuote}'`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json("DELETE COMPLETED")
        }
    })
}