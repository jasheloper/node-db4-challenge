
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          ingredient_quantity: 12,
          quantity_type: "OZ"
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          ingredient_quantity: 1,
          quantity_type: "POUND"
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          ingredient_quantity: 1,
          quantity_type: "CAN"
        }
      ]);
    });
};
