import PersonModel from '../models/PersonModel';

class PersonDao {
    fetchAll() {
        return PersonModel.forge()
            .query((qb) => {
                qb.select("p.id as id", "p.first_name as name", "c.name as company_name")
                    .from('persons as p')
                    .innerJoin('companies as c', 'c.id', 'p.company_id')
                    .orderBy('p.updated_at', 'ASC');
            })
            .fetchAll();
    }
}

export default PersonDao;
