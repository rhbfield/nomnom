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

const DOMAIN = 'https://api.edamam.com/search';
const API_KEY = '65c4e536f249fd469543ef31130ef33d';
const APP_ID = 'df52775d'
const RECIPE = 'recipe'
const BASE_URL = `${DOMAIN}?q=${RECIPE}&app_id=${APP_ID}&app_key=${API_KEY}&`


const ul = document.querySelector('ul');
const foodInput = document.querySelector('input');
const btn = document.querySelector('button');




const display = (foodData) => {
  const list = document.querySelector('food-detail');

  foodData.forEach(() => {
    const element = document.createElement('div');
    element.innerHTML =
      `<h3>Product: ${recipe.dietLabels}</h3>
      `
  });
  list.appendChild(element);
}


// Event Listener Returns Data

btn.addEventListener('click', async () => {
  let response = await axios.get(`${BASE_URL}?q=${RECIPE}${APP_ID}${API_KEY}from=0to=3`);
  console.log(response.data.hits);
  const stuff = response.data.hits
  for (let i = 0; i < stuff.length; i++) {
    console.log(stuff[i].recipe)
  }
});




// console.log(stuff[i].recipe.calories)


// recipes.calories
//Local Storage


//Hidden Div


//html create div h1 & h2

//css create different styles for pace 1  & page 2

//On click change to div 2