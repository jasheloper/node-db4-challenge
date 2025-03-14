exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          ingredient_name: "pasta",
        },
        {
          ingredient_name: "ground beef"
        },
        {
          ingredient_name: "spaghetti sauce"
        }
      ]);
    });
};
