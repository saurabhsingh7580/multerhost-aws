let { con } = require("../config/db")

const getData = async (req, res) => {
    try {
        let sql = "SELECT * FROM  multer_new"
        await con.query(sql, (error, result) => {
            if (error) {
                res.send({ status: 400, Error: error.sqlMessage })
            }
            res.send({ status: 200, response: result })
        })
    }
    catch (error) {
        res.send({ status: 400, Error: error.sqlMessage })

    }
}

const postData = async (req, res, next) => {
    try {
        const data = {
            user_id: req.body.user_id,
            name: req.body.name,
            City: req.body.City,
            Image: req.file.path
        }
        console.log(data, "data api")
        const SqlQuery = "INSERT INTO multer_new SET ?"
        await con.query(SqlQuery, data, (err, result) => {
            if (err) {
                return res.send({ status: 400, Error: err.sqlMessage })
            }
            res.send({ status: 200, response: result })
        })
    }
    catch (error) {
        res.send({ status: 400, Error: "error" })
    }
}

const updateData = async (req, res) => {
    try {
        let data = {
            user_id: req.body.user_id,
            name: req.body.name,
            City: req.body.City,
            Image: req.file.path
        }
        const SqlQuery = `UPDATE multer_new SET ? WHERE user_id=?`;
        await con.query(SqlQuery, data, (err, result) => {
            if (err) {
                return res.send({ status: 400, Error: err.sqlMessage })
            }
            res.send({ status: 200, "response": result })
        })
    } catch (error) {
        res.send({ status: 400, Error: error.sqlMessage })
    }
}

module.exports = { getData, postData, updateData }

