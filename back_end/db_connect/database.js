const {createConnection} = require("mysql");

const connection = createConnection({
    user:"root",
    password:"Vijay@6559",
    host:"localhost",
    database:"firstdb"
})

connection.query(`select * from product`,(err,result,fields) => {
    if(err){
        return console.log(err);
    }
    return a(result);
})

connection.query(`select * from roles`,(err,result,fields) => {
    if(err){
        return console.log(err);
    }
    return console.log(result);
})

const a = (result) => {console.log(result)}