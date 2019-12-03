const db = require('../data/dbConfig.js')



// * return a list of all recipes in the database.
/* * SQL equivalent :: SELECT *
FROM recipes;
 */

function getRecipes() {
   return db("recipes")
}


// * return a list of all ingredients and quantities for a given recipe

function getShoppingList(recipe_id) {
   return db("ingredients")
   .join(
      "recipe_ingredients", 
      
      "recipe_ingredients.ingredients_id" ,"ingredients.id" 
   )
   .select (
      "ingredients.ingredient_name",
      "recipe_ingredients.ingredient_quantity",
      "recipes_ingredients.quantity_type"
   )
   .where (
     {
        recipe_id: recipe_id
     }
   )
}



// * return a list of step by step instructions for preparing a recipe

function getInstructions(recipe_id) {
 return db("steps")
 .join(
    "recipes",
    "recipes.id", "steps.recipe_id"
 )
 .select(
    "recipes.recipe_name",
    "steps.step_number",
    "steps.instructions"
 )
 .where({
    recipe_id: recipe_id
 })
}



module.exports = {
   getRecipes,
   getShoppingList,
   getInstructions
}