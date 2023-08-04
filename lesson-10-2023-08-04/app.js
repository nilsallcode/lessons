const searchMealURL = 'https://themealdb.com/api/json/v1/1/search.php?s=';

let searchInput = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-button');
let noSearchText = document.querySelector('#no-search-text');

let recipeItem = document.querySelector('#recipe-item');
let recipeName = document.querySelector('#recipe-name');
let recipeImage = document.querySelector('#recipe-image');
let recipeCategory = document.querySelector('#recipe-category');
let recipeIntructions = document.querySelector('#recipe-instructions');

recipeItem.style.display = 'none';

searchButton.addEventListener('click', function () {

    let searchUrl = searchMealURL + searchInput.value;
    fetch(searchUrl)
        .then(response => response.json())
        .then(data => {

            if (data.meals !== null) {

                noSearchText.style.display = 'none';
                recipeItem.style.display = 'block';
                
                const recipe = data.meals[0];

                recipeName.innerHTML = recipe.strMeal;
                recipeImage.src = recipe.strMealThumb;

                recipeCategory.innerHTML = recipe.strCategory;
                recipeIntructions.innerHTML = recipe.strInstructions;

                searchInput.value = '';

            }

        });

});