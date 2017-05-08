// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://app:app@localhost:5432/app',
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds/dev'
    },
    debug: true
  },

  test: {
    client: 'postgresql',
    connection: 'postgres://app:app@localhost:5432/app_test',
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds/test'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};
