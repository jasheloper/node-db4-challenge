exports.up = function(knex) {
  return (
    knex.schema

      // * * R E C I P E S TABLE
      .createTable('recipes', tbl => {
        tbl.increments();
        tbl
          .string('recipe_name', 255)
          .notNullable()
          .unique();
      })

      // * * I N G R E D I E N T S  TABLE
      .createTable('ingredients', tbl => {
        tbl.increments();
        tbl
          .string('ingredient_name', 255)
          .notNullable()
          .unique();
      })

      // * * S T E P S  TABLE
      .createTable('steps', tbl => {
        tbl.increments();
        tbl
          .string('step_number', 255)
          .notNullable()
          .unique();
        tbl.string('instructions').notNullable();
        // FOREIGN KEY REFERENCE TO THE RECIPES TABLE - RECIPE ID
        tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('recipes.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
      // * * R E C I P E + I N G R E D I E N T S  TABLE
      .createTable('recipe_ingredients', tbl => {
        // FOREIGN KEY REFERENCE TO THE RECIPES TABLE - RECIPE ID
        tbl
          .integer('recipe_id')
          .unsigned()
          .notNullable()
          .references('recipes.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        // FOREIGN KEY REFERENCE TO THE INGREDIENTS TABLE - INGREDIENT ID
        tbl
          .integer('ingredient_id')
          .unsigned()
          .notNullable()
          .references('ingredient.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');

        tbl.integer('ingredient_quantity', 255).notNullable();
        tbl.string('quantity_type', 255).notNullable();
        tbl.primary(['recipes_id', 'ingredients_id']);
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
