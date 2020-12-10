const mysql = require("mysql");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "greatbay_db"
    })
}

connection.connect(function(err){
    if (err) throw err;
    console.log("CONNECTED...");
});

app.get("/", function(req, res){
    res.send("Connected...")
});

app.listen(PORT, function(){
    console.log("You've connected at http://localhost:" + PORT)
});