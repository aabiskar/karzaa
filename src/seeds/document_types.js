let tableName = 'document_types';

exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex(tableName).del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex(tableName).insert({id: 1, title: 'Citizenship'}),
                knex(tableName).insert({id: 2, title: 'Passport'}),
                knex(tableName).insert({id: 3, title: 'Three months bank statement'}),
                knex(tableName).insert({id: 4, title: 'Job letter'}),
                knex(tableName).insert({id: 5, title: 'Payslip'})
            ]);
        });
};
