//Requirements
var mysql = require("mysql");

let connection;

//Create connection (Add if for JAWS DB?)
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

if (process.env.JAWSDB_URL) {
    connection.query(`
    DROP DATABASE IF EXISTS burgers_db;
    CREATE DATABASE burgers_db;
    USE burgers_db;
    
    CREATE TABLE burgers
    (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        devoured BOOLEAN DEFAULT false,
        PRIMARY KEY (id)
    );
    
    INSERT INTO burgers (name) VALUES ("Big Mac");
    INSERT INTO burgers (name) VALUES ("Whopper");
    INSERT INTO burgers (name) VALUES ("Crunch Burger");
    INSERT INTO burgers (name) VALUES ("Zack's Special");
    INSERT INTO burgers (name) VALUES ("All the Way Burger");    

    `, function (err) {
        if (err) throw err;
    });
}

module.exports = connection;