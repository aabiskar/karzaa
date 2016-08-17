import bookshelf from './bookshelf';

const CompanyModel = bookshelf.Model.extend({
    tableName: 'companies'
});

export default CompanyModel;
