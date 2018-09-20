
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { 
          id: 1,
          first_name: 'Ryan', 
          last_name:'McCrory', 
          image:'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/21054999_10211074994365384_2068569492571368526_o.jpg?_nc_cat=0&oh=b89f2e4ea533ed2e405eb7328b6a24ca&oe=5C278EB7', 
          religious_preference: 'Christian', 
          military_branch: 'Army', 
          contacts: ''
        }
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE user_id_seq RESTART WITH 2;');
    })
};
