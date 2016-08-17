import bookshelf from './bookshelf';

const PersonModel = bookshelf.Model.extend({
    tableName: 'persons'
});

export default PersonModel;
