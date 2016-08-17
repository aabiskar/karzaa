import CompanyDao from '../daos/CompanyDao';

class CompanyService {

    constructor() {
        this.companyDao = new CompanyDao();
    }
}

export default CompanyService;
