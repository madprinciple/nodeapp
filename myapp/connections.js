var mysql = require("mysql");
//Database connection
var	mysqlconnection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database : 'test'
	});
	mysqlconnection.connect();
module.exports = mysqlconnection;