const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const detailsContainer = document.querySelector(".details");
const loader = document.querySelector(".loader");
const title = document.querySelector("title");

const cors = "https://noroffcors.herokuapp.com/";

const url = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

async function fetchUrl() {
  const response = await fetch(cors + url + id);
  const json = await response.json();
  const drinks = json.drinks;

  createHtml(drinks);
}

fetchUrl();

function createHtml(drinks) {
  title.innerHTML = "Drink: " + drinks[0].strDrink;
  detailsContainer.innerHTML = "";

  detailsContainer.innerHTML += ` 
        <div class="drink-details"> 
        <img src=${drinks[0].strDrinkThumb}>
        <h2>${drinks[0].strDrink}</h2>
        <p> Glass Type: ${drinks[0].strGlass}</p>
        <p> Drink category: ${drinks[0].strCategory} </p>
        <p> ${drinks[0].strAlcoholic}</p>
        </div>
        <hr>
        </div class="ingredients">
        <p> ${drinks[0].strInstructions}
     
        `;
}
