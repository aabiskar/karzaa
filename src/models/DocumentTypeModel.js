import bookshelf from './bookshelf';

const DocumentTypeModel = bookshelf.Model.extend({
    tableName: 'document_type'
});

export default DocumentTypeModel;
