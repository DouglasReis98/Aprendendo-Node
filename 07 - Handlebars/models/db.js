const Sequelize = require('sequelize'); // Inclui um módulo Sequelize

    // Conexão com o banco de dados MySQL
    const sequelize = new Sequelize('postapp', 'root', 'mypassword', {
        host: "localhost",
        dialect: "mysql"
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize : sequelize
}

// mysql -h localhost -P 3307 -u root -p