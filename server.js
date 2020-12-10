const mysql = require("mysql");

// mysql://fyfomaq3yaa1lg2x:gxn4fwjvi0ou2gc8@lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zacau1dtrxvo29g0
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "animals_db"
    });
} 


connection.connect(function(err){
    if (err) throw err;
    console.log("CONNECTED");
    connection.end();
});