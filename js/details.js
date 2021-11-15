const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const detailsContainer = document.querySelector(".details");
const loader = document.querySelector(".loader");
const title = document.querySelector("title");

const cors = "https://noroffcors.herokuapp.com/";

const url = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

// async function fetchUrl() {

//     const respone = await fetch("https://imdb8.p.rapidapi.com/title/get-details?tconst=" + id, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//             "x-rapidapi-key": "e97228322bmshf0be17d2a54bbf9p160588jsn50690065a659"
//         }
//     });
//     const data = await respone.json();

//     console.log(data);

//     createHtml(data);
// }

async function fetchUrl() {
  const response = await fetch(cors + url + id);
  const json = await response.json();
  console.log(json);

  const drinks = json.drinks;
  console.log(drinks);

  createHtml(drinks);
}

fetchUrl();

function createHtml(drinks) {
  title.innerHTML = "Drink: " + drinks[0].strDrink;
  loader.classList.remove("loader");

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
