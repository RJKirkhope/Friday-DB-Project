exports.up = function(knex, Promise) {
  return knex.schema.createTable('g90_students', function(table){
    table.increments()
    table.text('firstName')
    table.text('lastName')
    table.text('photo')
    table.text('hometownLat')
    table.text('hometownLong')
    table.text('prevOccupation')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('g90_students')
};
