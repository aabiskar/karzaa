import DocumentTypeDao from '../daos/DocumentTypeDao';

class DocumentTypeService {

    constructor() {
        this.documentTypeDao = new DocumentTypeDao();
    }
}

export default DocumentTypeService;
