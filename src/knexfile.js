let config = require('./config.json');

module.exports = {
    development: {
        client: config.bookshelf.client,
        connection: {
            database: config.bookshelf.connection.database,
            port: config.bookshelf.connection.port,
            user: config.bookshelf.connection.username,
            password: config.bookshelf.connection.password
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};
