fetch('/recipe/pizza')
  .then(response => response.json())
  .then(recipe => {
    document.getElementById('recipe-name').innerText = `${recipe.name}`;

    const instructionsList = document.getElementById('recipe-instructions');
    recipe.instructions.forEach(instruction => {
      const li = document.createElement('li');
      li.innerText = instruction;
      instructionsList.appendChild(li);
    });

    const ingredientsList = document.getElementById('recipe-ingredients');
    recipe.ingredients.forEach(ingredient => {
      const li = document.createElement('li');
      li.innerText = ingredient;
      ingredientsList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching recipe:', error);
  });