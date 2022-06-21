const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'registercellphone',
    password: 'Magda172205',
    port: 5432,
});

const query = (text, param) => {
    return pool.query(text, param);
};

module.exports  = {
    query
};