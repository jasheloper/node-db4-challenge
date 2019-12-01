exports.up = function(knex) {
  return (
    knex.schema

      // * * R E C I P E S TABLE
      .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("recipe_name", 255).notNullable();
      })

      // * * I N G R E D I E N T S  TABLE
      .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("ingredient_name", 255).notNullable();
      })

      // * * S T E P S  TABLE
      .createTable("steps", tbl => {
        tbl.increments();
        tbl
          .integer("step_number")
          .unsigned()
          .notNullable();
        tbl.string("instructions").notNullable();
        // FOREIGN KEY REFERENCE TO THE RECIPES TABLE - RECIPE ID
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("recipes.id")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })
      // * * R E C I P E + I N G R E D I E N T S  TABLE
      .createTable("recipe_ingredients", tbl => {
        tbl.increments();
        // FOREIGN KEY REFERENCE TO THE RECIPES TABLE - RECIPE ID
        tbl
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
          tbl.foreign('recipe_id').references('recipes.id')
        // FOREIGN KEY REFERENCE TO THE INGREDIENTS TABLE - INGREDIENT ID
        tbl
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
          tbl.foreign('ingredient_id').references('ingredients.id')

        tbl
          .integer("ingredient_quantity", 255)
          .unsigned()
          .notNullable();
        tbl.string("quantity_type", 255).notNullable();
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
