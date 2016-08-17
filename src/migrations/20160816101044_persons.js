let moment = require('moment');
let tableName = 'persons';

exports.up = function (knex, Promise) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments('id').primary();
        table.string('first_name').notNull();
        table.string('middle_name').nullable();
        table.string('last_name').notNull();
        table.integer('age').notNull();
        table.string('gender').notNull();
        table.string('email').notNull();
        table.integer('phone').notNull();
        table.string('zone').notNull();
        table.string('district').notNull();
        table.string('city').notNull();
        table.integer('ward_no').nullable();
        table.string('tole').nullable();
        table.integer('company_id').notNull();
        table.dateTime('created_at').notNull().defaultTo(moment().format());
        table.dateTime('updated_at').notNull().defaultTo(moment().format());
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable(tableName);
};
