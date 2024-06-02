module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    define: {
        timestamps: true, //cria duas colunas: createdAt (coluna que indica quando foi criado) e updatedAt (coluna que indica quando foi alterado)
        underscored: true,
        underscoredAll: true,
    },
}