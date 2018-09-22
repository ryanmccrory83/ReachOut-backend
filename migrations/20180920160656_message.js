
exports.up = function(knex, Promise) {
    return knex.schema.createTable('message', (table) => {
        table.increments('id').primary();
        table.date('message_datetime');
        table.text('message_text');
        table.text('message_chat_guid');
        table.integer('message_user_id');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('message');
};
