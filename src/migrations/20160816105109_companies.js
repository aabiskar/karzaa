let moment = require('moment');
let tableName = 'companies';

exports.up = function (knex, Promise) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments('id').primary();
        table.string('name').notNull();
        table.string('email').notNull();
        table.integer('phone').notNull();
        table.string('contact_person_name').notNull();
        table.string('zone').notNull();
        table.string('district').notNull();
        table.string('city').notNull();
        table.integer('ward_no').nullable();
        table.string('tole').nullable();
        table.dateTime('created_at').notNull().defaultTo(moment().format());
        table.dateTime('updated_at').notNull().defaultTo(moment().format());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable(tableName);
};
