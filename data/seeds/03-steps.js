
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_number: '1',
          instructions: 'Cook spaghetti noodles according to package directions.',
          recipe_id: '1'
        },
        {
          step_number: '2',
          instructions: 'Heat oil in large skillet over medium-high heat; Add beef; Cook 7 minutes or until beef is crumbled and no longer pink, stirring occasionally. Drain.',
          recipe_id: '1'
        },
        {
          step_number: '3',
          instructions: 'Add pasta sauce to skillet; stir together. Simmer covered over medium-low heat 10 minutes or until hot. Drain spaghetti. Serve meat sauce with spaghetti.',
          recipe_id: '1'
        },
        
      ]);
    });
};
