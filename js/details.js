const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const detailsContainer = document.querySelector(".details");
const title = document.querySelector("title");

const cors = "https://noroffcors.herokuapp.com/";
const url = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const searchApi = cors + url + id;

async function fetchUrl() {
  try {
    const response = await fetch(searchApi);
    const json = await response.json();
    const drinks = json.drinks;

    createHtml(drinks);
  } catch (error) {
    const errorMessage = errorDuringApiCall(error);
    detailsContainer.innerHTML = errorMessage;
  }
}
fetchUrl();

function createHtml(drinks) {
  title.innerHTML = "Drink: " + drinks[0].strDrink;
  detailsContainer.innerHTML = "";

  // Create array of ingredients
  const ingredientsForDrink = [];
  for (let i = 1; i <= 15; i++) {
    if (drinks[0][`strIngredient${i}`]) {
      ingredientsForDrink.push(drinks[0][`strIngredient${i}`]);
    }
  }

  // Create array of Measurements
  const measureForIngredients = [];
  for (let i = 0; i <= 15; i++) {
    if (drinks[0][`strMeasure${i}`]) {
      measureForIngredients.push(drinks[0][`strMeasure${i}`]);
    }
  }

  detailsContainer.innerHTML += ` 
          <div class="drink-details"> 
          <img src=${drinks[0].strDrinkThumb}>
          <h2>${drinks[0].strDrink}</h2>
          <p> Glass Type: ${drinks[0].strGlass}</p>
          <p> Drink category: ${drinks[0].strCategory} </p>
          <p> ${drinks[0].strAlcoholic}</p>
          </div>
          <div class="ingredients">
          <p> ${drinks[0].strInstructions} </p>
          <p> Ingredients and Measurements</p>
          </div>
          `;

  for (let i = 0; i < ingredientsForDrink.length; i++) {
    const ingredientsContainer = document.querySelector(".ingredients");
    ingredientsContainer.innerHTML += `
      <p>
   ${i + 1}: ${ingredientsForDrink[i]} -
      ${measureForIngredients[i]} </p>
      `;
  }
}
