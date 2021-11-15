// const url = "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr";

// const apiKey = "e97228322bmshf0be17d2a54bbf9p160588jsn50690065a659";
// const apiUrl = url + apiKey;
const inputContainer = document.querySelector("#drink");
const searchButton = document.querySelector("#search-button");
const resultsContainer = document.querySelector(".results");

// async function fetchUrl() {
//     const searchValue = inputContainer.value;
//     const respone = await fetch("https://imdb8.p.rapidapi.com/auto-complete?q=" + searchValue, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//             "x-rapidapi-key": "e97228322bmshf0be17d2a54bbf9p160588jsn50690065a659"
//         }
//     });
//     const json = await respone.json();
//     const data = json.d;
//     createHtml(data);
//     console.log(data);
// }

const cors = "https://noroffcors.herokuapp.com/";

const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";

async function fetchUrl() {
  const respone = await fetch(cors + url);
  const json = await respone.json();
  console.log(json.drinks);
  const drinks = json.drinks;

  createHtml(drinks);
}

fetchUrl();

function createHtml(drinks) {
  const id = "";
  resultsContainer.innerHTML = "";

  for (let i = 0; i < drinks.length; i++) {
    resultsContainer.innerHTML += `<a href="details.html?id=${drinks[i].idDrink}" class="drink"> 
        <div> 
        <img src=${drinks[i].strDrinkThumb}>
        <h2> ${drinks[i].strDrink}</h2>
     
        <p>${drinks[i].strCategory}</p>
        </div>
        </a>`;
  }
}

// searchButton.onclick = fetchUrl; lag ny søke funksjon

async function searchForDrink() {
  const searchValue = inputContainer.value;
  const respone = await fetch(cors + url + searchValue);
  const json = await respone.json();
  const drinks = json.drinks;

  createHtml(drinks);
}

searchButton.onclick = searchForDrink;
