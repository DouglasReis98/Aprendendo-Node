const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },

    conteudo: {
        type: db.Sequelize.TEXT
    }
})

// Post.sync({force: true}); // Cria a tabela. Executar ao criar o model

module.exports = Post