//Requirements
var mysql = require("mysql");

let connection;

// mysql://o1scrrvdzbzv29rz:tt22p8cb3dbrlars@b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/dzkhuircksry2dn9
//Create connection (Add if for JAWS DB?)
// let connection = mysql.createConnection("mysql://o1scrrvdzbzv29rz:tt22p8cb3dbrlars@b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/dzkhuircksry2dn9");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {

    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });

} 
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});



module.exports = connection;