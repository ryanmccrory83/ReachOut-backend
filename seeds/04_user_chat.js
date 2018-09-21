
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_chat').insert([
        {
          id: 1, 
          user_chat_chat_guid: '1', 
          user_chat_user_id: 1
        },
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE user_chat_id_seq RESTART WITH 2;');
    })
};
