import PersonDao from '../daos/PersonDao';

class PersonService {

    constructor() {
        this.personDao = new PersonDao();
    }

    getList() {
        return this.personDao.fetchAll();
    }
}

export default PersonService;
