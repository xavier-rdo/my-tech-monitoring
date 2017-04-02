import pgp from 'pg-promise';

const connectionString = 'postgres://app:app@localhost:5432/app';

export default pgp({})(connectionString);
