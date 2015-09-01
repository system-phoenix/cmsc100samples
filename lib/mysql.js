var mysql = require('mysql');

module.exports = mysql.createConnection({
	host	: 'localhost',
	user	: 'system.phoenix',
	password: '12345',
	database: 'cmsc100ef2l'
});
