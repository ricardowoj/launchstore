const { Pool } = require("pg")

module.exports = new Pool ({
    user: 'postgres',
    password: 'Rick1985',
    host: 'localhost',
    port: 5432,
    database: 'lauchstores_db'
})