const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
    add,
    find,
    findBy,
    findById
}

function find() {
    return db('users');
};

function findBy(filter){
    return db('users')
        .where(filter);
};

function findById(id){
    return db('users')
        .where({ id })
        .first();
};

async function add(user) {
    try {
        const [id] = await db('users').insert(user, 'id');
        return findById(id);
    }catch(err){
        throw err;
    }
}