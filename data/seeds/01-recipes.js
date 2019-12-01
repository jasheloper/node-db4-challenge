
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Spaghetti'},
        {recipe_name: 'Scrambled Eggs'},
        {recipe_name: 'Turkey Burger'},
      ]);
    });
};
