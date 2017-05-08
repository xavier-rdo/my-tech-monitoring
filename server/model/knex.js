import dbConfig from '../../knexfile';
import knex from 'knex';

let knexConfig = dbConfig[process.env.NODE_ENV || 'development'];

export default knex(knexConfig);
