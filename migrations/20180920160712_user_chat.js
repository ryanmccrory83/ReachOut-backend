
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_chat', (table) => {
        table.increments('id').primary();
        table.text('user_chat_chat_guid');
        table.integer('user_chat_user_id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_chat');
};
