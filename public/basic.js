fetch('http://localhost:3000/recipe/pizza')
  .then(response => response.json())
  .then(recipe => {
    document.getElementById('recipe-name').innerText = `${recipe.name}`;
    const instructionsList = document.getElementById('recipe-instructions');
    const ingredientsList = document.getElementById('recipe-ingredients');

    recipe.instructions.forEach(i => {
      const li = document.createElement('li');
      li.innerText = i;
      instructionsList.appendChild(li);
    });
    
    recipe.ingredients.forEach(i => {
      const li = document.createElement('li');
      li.innerText = i;
      ingredientsList.appendChild(li);
    });
  })
