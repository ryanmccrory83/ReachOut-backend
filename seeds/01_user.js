
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
          image_url:'https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/21054999_10211074994365384_2068569492571368526_o.jpg?_nc_cat=0&oh=b89f2e4ea533ed2e405eb7328b6a24ca&oe=5C278EB7', 
          religious_preference: 'Christian', 
          military_branch: 'Army', 
          contacts: ['Austin Loveless','Danny Pifer','Kevin Potts','James Truitt'],
          auth_token: 'asdfasdfasdf'
        },
        {
          id: 2,
          first_name: 'Austin', 
          last_name:'Loveless', 
          image_url:'https://ca.slack-edge.com/T1T555TL0-U9H7BQGAU-017e126e8098-192', 
          religious_preference: 'N/A', 
          military_branch: 'Navy', 
          contacts: ['Ryan McCrory','Danny Pifer','Kevin Potts','James Truitt'],
          auth_token: 'asdfasdfasdff'
        },
        {
          id: 3,
          first_name: 'Danny', 
          last_name:'Pifer', 
          image_url:'https://ca.slack-edge.com/T1T555TL0-UA5EB2NK0-6b9df3fabb92-192', 
          religious_preference: 'N/A', 
          military_branch: 'Navy', 
          contacts: ['Austin Loveless','Ryan McCrory','Kevin Potts','James Truitt'],
          auth_token: 'asdfasdfasdfff'
        },
        {
          id: 4,
          first_name: 'Kevin', 
          last_name:'Potts', 
          image_url:'https://ca.slack-edge.com/T1T555TL0-UB0PLSJBV-512775f6d3ce-192', 
          religious_preference: 'N/A', 
          military_branch: 'Army', 
          contacts: ['Austin Loveless','Ryan McCrory','Danny Pifer','James Truitt'],
          auth_token: 'asdfasdfasdffff'
        },
        {
          id: 5,
          first_name: 'James', 
          last_name:'Truitt', 
          image_url:'https://ca.slack-edge.com/T1T555TL0-U7HUEHED6-3ec3e13df670-192', 
          religious_preference: 'N/A', 
          military_branch: 'Army', 
          contacts: ['Austin Loveless','Ryan McCrory','Danny Pifer','Kevin Potts'],
          auth_token: 'asdfasdfasdfffff'
        }
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE user_id_seq RESTART WITH 6;');
    })
};
