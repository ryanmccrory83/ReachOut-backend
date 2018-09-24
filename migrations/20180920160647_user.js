
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id').primary();
        table.text('username');
        table.text('password');
        table.text('email');
        table.text('first_name');
        table.text('last_name');
        table.text('image_url');
        table.text('religious_preference');
        table.text('military_branch');
        table.text('contacts');
        table.text('auth_token');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user');
};
