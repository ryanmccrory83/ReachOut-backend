
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([
        {id: 1, chat_guid: '1'},
        
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE chat_id_seq RESTART WITH 2;');
    })
};
