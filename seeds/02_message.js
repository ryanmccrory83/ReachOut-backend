
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('message').del()
    .then(function () {
      // Inserts seed entries
      return knex('message').insert([
        {
          id: 1, 
          message_datetime: '09-20-2018', 
          message_text: 'Hi', 
          message_chat_guid: '12345', 
          message_user_id: 1
        },
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE message_id_seq RESTART WITH 2;');
    })
};
