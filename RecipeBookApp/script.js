const apiKey = '43e8fd1c29ef43a6ba7f450639e59683';
const recipeListEl = document.getElementById('recipe-list');

function displayRecipes(recipes) {
  recipeListEl.innerHTML = '';
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement('li');
    recipeItemEl.classList.add('recipe-item');
    const recipeImageEl = document.createElement('img');
    recipeImageEl.src = recipe.image;
    recipeImageEl.alt = 'recipe img';

    const recipeTitleEl = document.createElement('h2');
    recipeTitleEl.innerHTML = recipe.title;

    const recipeIngredientsEl = document.createElement('p');
    recipeIngredientsEl.innerHTML = `
      <strong>Ingridients:</strong> ${recipe.extendedIngredients
        .map((ingredient) => ingredient.original)
        .join(',')}
    `;

    const recipeLinkEl = document.createElement('a');
    recipeLinkEl.href = recipe.sourceUrl;
    recipeLinkEl.innerHTML = 'View Recipe';

    recipeItemEl.appendChild(recipeImageEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl);
    recipeListEl.appendChild(recipeItemEl);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}`
  );

  const data = await response.json();

  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  // console.log(recipes);

  displayRecipes(recipes);
}

init();
