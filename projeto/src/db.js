const mysql = require('mysql2');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola'
});
db.connect((err) => {
    if (err) {
        console.erron('Erro de conexão', err); 
        return;
    }
    console.log('Conectado ao MySql!')
});
module.exports = db;