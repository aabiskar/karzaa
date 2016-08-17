import DocumentDao from '../daos/DocumentDao';

class DocumentService {

    constructor() {
        this.documentDao = new DocumentDao();
    }
}

export default DocumentService;
