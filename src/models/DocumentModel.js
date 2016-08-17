import bookshelf from './bookshelf';

const DocumentModel = bookshelf.Model.extend({
    tableName: 'documents'
});

export default DocumentModel;
