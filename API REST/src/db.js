const sequelize = require('sequelize');

const database = new sequelize('APIREST','ApiRest', 'leo1122334455',{dialect: 'mssql', host:'JVLPC0587', port: 1433});

database.sync();
module.exports = database;