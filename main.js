//https://developer.edamam.com/admin/applications/1409618447375?service_id=2555417725632

// Application Keys - 65c4e536f249fd469543ef31130ef33d

// Application ID
// df52775d //This is the application ID, you should send with each API request.
//https://developer.edamam.com/edamam-docs-recipe-api
//*Exactly one of these ( q / r ) must be present

//q	yes*	string	Query text. For example q=chicken. This or the r parameter are required

//r	yes*	string	Returns information about a specific recipe based on its ID ie. r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408 This or the q parameter are required

//app_id	yes	string	Your 3scale application ID
//app_key	yes	string	Your 3scale application key(please note app_id / app_key are an ordered pair)


//Example GET Request: curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

console.log("Your JS is working");

//API INFO
const DOMAIN = 'https://api.edamam.com/search';
const API_KEY = '65c4e536f249fd469543ef31130ef33d';
const APP_ID = 'df52775d'
const BASE_URL = `${DOMAIN}?app_id=${APP_ID}&app_key=${API_KEY}&`


// HTML ELEMENTS
const ul = document.querySelector('ul');
const foodInput = document.querySelector('input');
const btn = document.querySelector('#food-search');

// HTML PAGE TRANSITIONS
// const page1 = document.querySelector("#page1")
// const page2 = document.querySelector("#page2")


// EVENT LISTENER (FUNCTION = OK)
btn.addEventListener('click', async () => {
  // page1.style.display = "none"
  // page2.style.display = "block"
  console.log("click")
  let result = foodInput.value;
  let response = await axios.get(`${BASE_URL}q=${result}`);
  console.log(response.data.hits);
  const foodItems = response.data.hits
  render(foodItems)
});

let value;

const render = (foodItems) => {
  foodItems.forEach((food) => {
    console.log(food.recipe)
    console.log(foodItems)
    const list = document.querySelector('.food-detail')
    const element = document.createElement('div');
    element.innerHTML =
      `<h2>${food.recipe.label}</h2>
      <p>Health Label:${food.recipe.healthLabels}</p>
      <p>Diet:${food.recipe.dietLabels}</p>
      <p>Calories: ${food.recipe.calories} </p>
       `;
    list.appendChild(element)
  })
}

// HTML PAGE TRANSITIONS EVENT LISTENERS

// page1.addEventListener("click", () => {
//   page1.style.display = "none"
//   page2.style.display = "block"
// })

// page2.addEventListener("click", () => {
//   page2.style.display = "none"
//   page1.style.display = "block"
// })