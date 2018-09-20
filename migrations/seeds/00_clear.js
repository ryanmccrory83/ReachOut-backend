
exports.seed = function(knex, Promise) {
  return knex('user').del()
}