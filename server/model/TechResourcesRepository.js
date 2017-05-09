import knex from './knex';

class TechResourcesRepository {
    getAllResources() {
        return knex.select().table('model.techresources');
    }
}

export default TechResourcesRepository;
