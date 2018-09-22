const database = require('./database-connection');

module.exports = {
    listUsers() {
        return database('user');
    },
    getUserById(id) {
        return database('user').select('*').where('id', id).first();
    },
    createUser(user) {
        return database('user').insert(user).return('*').then(record => record[0]);
    },
    updateUser(id, user) {
        return database('user').update(user).where('id', id).returning('*').then(record => record[0]);
    },
    deleteUser(id) {
        return database('user').delete().where('id', id);
    }
}