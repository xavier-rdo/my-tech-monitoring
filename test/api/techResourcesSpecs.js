// Import the required dev-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server/index';
import knex from'../../server/model/knex';

const should = chai.should();

chai.use(chaiHttp);

describe('API routes for technical resources', () => {
    beforeEach((done) => {
        knex.seed.run()
        .then(() => {
            Promise.resolve(done());
        })
        .catch((err) => {
            Promise.reject(done(err));
        });
    });

    describe('Calling GET /api/techresources', () => {
        it('should return a 200 HTTP status code and a list of resources', (done) => {
            chai.request(server)
            .get('/api/techresources')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.should.have.property('data').with.lengthOf(1);
                res.body.should.have.property('pagination');
                done();
            });
        });
    });
});
