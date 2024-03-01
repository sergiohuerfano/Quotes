const connection = require('../../../../config/connection')

// CRUD IMPLEMENTATION

exports.getAllProducts = (req, res)=>{
    const sqlbd = 'SELECT * FROM product_tb'
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
    const sqlbd = `SELECT * FROM product_tb WHERE idProduct = ${id}`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.addProduct = (req, res)=>{
    const {nameProduct, stockProduct, vlrProduct} = req.body;
    const sqlbd = `INSERT INTO product_tb (nameProduct, stockProduct, vlrProduct) VALUES ('${nameProduct}', '${stockProduct}', '${vlrProduct}')`;
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.updateProduct = (req, res)=>{
    const {idProduct, nameProduct, stockProduct, vlrProduct} = req.body;
    const sqlbd = `UPDATE product_tb SET nameProduct = '${nameProduct}', stockProduct = '${stockProduct}', vlrProduct = '${vlrProduct}' WHERE idProduct = '${idProduct}'`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json(rows)
        }
    })
}

exports.deleteProduct = (req, res)=>{
    const {idProduct} = req.body;
    const sqlbd = `DELETE FROM product_tb WHERE idProduct = '${idProduct}'`
    connection.query(sqlbd, (error, rows) => {
        if (error) {
            res.json(error)
        } else {
            res.json("DELETE COMPLETED")
        }
    })
}