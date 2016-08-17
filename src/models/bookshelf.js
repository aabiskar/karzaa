import knex from 'knex';
import bookshelf from 'bookshelf';
import config from './../config.json';

let conn = knex(config.bookshelf);
let bs = bookshelf(conn);

/* For pagination in query. */
bs.plugin('pagination');

export default bs;
