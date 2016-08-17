let moment = require('moment');
let tableName = 'documents';

exports.up = function (knex, Promise) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments('id').primary();
        table.integer('person_id').notNull();
        table.integer('document_type_id').notNull();
        table.string('filename', 510).notNull();
        table.dateTime('created_at').notNull().defaultTo(moment().format());
        table.dateTime('updated_at').notNull().defaultTo(moment().format());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable(tableName);
};
