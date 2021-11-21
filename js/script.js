const inputContainer = document.querySelector("#drink");
const searchButton = document.querySelector("#search-button");
const resultsContainer = document.querySelector(".results");

const cors = "https://noroffcors.herokuapp.com/";
const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const apiURL = cors + url;

async function fetchUrl() {
  try {
    const respone = await fetch(apiURL);
    const json = await respone.json();
    const drinks = json.drinks;
    console.log(drinks);

    createHtml(drinks);
  } catch (error) {
    const errorMessage = errorDuringApiCall(error);
    resultsContainer.innerHTML = errorMessage;
  }
}

fetchUrl();

// Creates the HTML for the home page

function createHtml(drinks) {
  resultsContainer.innerHTML = "";
  resultsContainer.classList.add("grid");

  for (let i = 0; i < drinks.length; i++) {
    resultsContainer.innerHTML += `<a href="details.html?id=${drinks[i].idDrink}" class="drink" style="text-decoration:none">
      <div>
      <img src=${drinks[i].strDrinkThumb}>
      <h2> ${drinks[i].strDrink}</h2>
      <h3>Drink Category: ${drinks[i].strCategory}</h3>
      <h3> Type of glass: ${drinks[i].strGlass}</h3>
       <h3>  ${drinks[i].strAlcoholic}</h3>
      </div>
      </a>`;
  }
}

// Search for desired drink or ingredient

async function searchFunction() {
  try {
    const searchValue = inputContainer.value;
    const response = await fetch(apiURL + searchValue);
    const json = await response.json();
    const drinks = json.drinks;
    resultsContainer.innerHTML = "";
    if (!drinks) {
      resultsContainer.innerHTML = `<div class="no-results"> No results where found during your search....</div>`;
    } else {
      createHtml(drinks);
    }
  } catch (error) {
    const errorMessage = errorDuringApiCall(error);
    resultsContainer.innerHTML = errorMessage;
  }
}

searchButton.onclick = searchFunction;

// Allows enter key to submit search function

inputContainer.addEventListener("keydown", function (search) {
  if (search.keyCode === 13) {
    searchFunction();
  }
});
