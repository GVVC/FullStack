const {createConnection} = require("mysql");

const connection = createConnection({
    user:"root",
    password:"Vijay@6559",
    host:"localhost",
    database:"firstdb"
})

connection.query(`select * from user`,(err,result,fields) => {
    if(err){
        return console.log(err);
    }
    return a(result);
})

const a = (result) => {console.log(result)}