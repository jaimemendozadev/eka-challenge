exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('username').unique();
      table.string('password');
      table.string('email').unique();
      table.string('firstName');
      table.string('lastName');
      table.string('telephone');
      table.string('street');
      table.string('city');
      table.string('state');
      table.integer('zip');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};
