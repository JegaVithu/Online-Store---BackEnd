var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.DB_USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log("DB Connected");
});

module.exports = connection;