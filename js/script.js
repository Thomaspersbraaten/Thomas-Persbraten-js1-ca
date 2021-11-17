const inputContainer = document.querySelector("#drink");
const searchButton = document.querySelector("#search-button");
const resultsContainer = document.querySelector(".results");
const cors = "https://noroffcors.herokuapp.com/";

const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";
// const url = "www.thecocktailssdb.com/api/json/v1/1/search.php?s=";
const apiURL = cors + url;

// async function getDataFromApi(resource) {
//   try {
//     const response = await fetch(`${apiURL}`);
//     return await response.json();
//   }
// }

async function fetchUrl() {
  try {
    const respone = await fetch(apiURL);
    const json = await respone.json();
    const drinks = json.drinks;

    createHtml(drinks);
  } catch (error) {
    const theError = showError("error", `There was an error:<br>   ${error}`);
    resultsContainer.innerHTML = theError;
  }
}

function showError(type, message) {
  const errorMessage = `<div class="${type}"> ${message} </div>`;
  return errorMessage;
}
fetchUrl();

function createHtml(drinks) {
  resultsContainer.innerHTML = "";

  for (let i = 0; i < drinks.length; i++) {
    resultsContainer.innerHTML += `<a href="details.html?id=${drinks[i].idDrink}" class="drink" style="text-decoration:none"> 
      <div> 
      <img src=${drinks[i].strDrinkThumb}>
      <h2> ${drinks[i].strDrink}</h2>
      <h3>Drink Category: ${drinks[i].strCategory}</h3>
      <h3> Type of glass: ${drinks[i].strGlass}</h3>
      </div>
      </a>`;
  }
}

// searchButton.onclick = fetchUrl; lag ny søke funksjon og ved null results vis melding. og try catch med error melding

async function searchForDrink() {
  const searchValue = inputContainer.value;
  const response = await fetch(apiURL + searchValue);
  const json = await response.json();
  const drinks = json.drinks;
  resultsContainer.innerHTML = "";
  if (drinks === null) {
    resultsContainer.innerHTML = `<div class="no-results"> No results where found during your search....</div>`;
  } else {
    createHtml(drinks);
  }
}

searchButton.onclick = searchForDrink;
