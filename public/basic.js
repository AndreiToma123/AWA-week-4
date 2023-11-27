fetch('http://localhost:8000/recipe/pizza')
  .then(response => response.json())
  .then(recipe => {
    document.getElementById('recipe-name').innerText = `${recipe.name}`;
    const instructionList = document.getElementById('recipe-instructions');
    const ingredientList = document.getElementById('recipe-ingredients');

    recipe.instructions.forEach(i => {
      const li = document.createElement('li');
      li.innerText = i;
      instructionList.appendChild(li);
    });

    recipe.ingredients.forEach(i => {
      const li = document.createElement('li');
      li.innerText = i;
      ingredientList.appendChild(li);
    });
  });
