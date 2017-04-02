import conn from './conn';

class TechResourcesRepository {
    getAllResources() {
        return conn.any('select * from model.techresources');
    };
}

export default TechResourcesRepository;
