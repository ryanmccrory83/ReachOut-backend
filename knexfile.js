// Update with your config settings.
require('dotenv').load();

module.exports = {

  development: {
      client: 'pg',
      connection: 'postgresql:///reach_out'
  },

  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
  }

};
