const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use('/app.js', (req, res, next) => {
  res.type('application/javascript');
  next();
});

app.get('/recipe/:food', (req, res) => {
  const foodName = req.params.food;

  const recipeInstructions = [
    '1) Mix well',
    '2) Put in the oven',
  ];

  const recipeIngredients = [
    'Something fresh',
    'Something healthy',
  ];

  const recipe = {
    name: foodName,
    instructions: recipeInstructions,
    ingredients: recipeIngredients,
  };

  res.json(recipe);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});