let mysql = require("mysql")

let con = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"multer"
})




con.connect((error)=>{
    if(error){
        console.log(error.sqlMessage)
    }
    else{
        console.log("Databases connect tnplab")
    }

})

module.exports = {con};