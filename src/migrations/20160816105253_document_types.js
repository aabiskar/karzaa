let moment = require('moment');
let tableName = 'document_types';

exports.up = function (knex, Promise) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments('id').primary();
        table.string('title').notNull();
        table.dateTime('created_at').notNull().defaultTo(moment().format());
        table.dateTime('updated_at').notNull().defaultTo(moment().format());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable(tableName);
};
