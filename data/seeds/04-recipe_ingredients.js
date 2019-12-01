
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          recipe_id: '1',
          ingredient_id: '1',
          ingredient_quantity: '12',
          quantity_type: 'oz'
        },
        {
          recipe_id: '1',
          ingredient_id: '2',
          ingredient_quantity: '1',
          quantity_type: 'pounds'
        },
        {
          recipe_id: '1',
          ingredient_id: '1',
          ingredient_quantity: '1',
          quantity_type: 'can'
        }
      ]);
    });
};
