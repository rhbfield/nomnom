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

//HTML PAGE TRANSITIONS
const page1 = document.querySelector("#page1")
const page2 = document.querySelector("#page2")


// EVENT LISTENER (FUNCTION = OK)
btn.addEventListener('click', async () => {
  page1.style.display = "none"
  page2.style.display = "block"
  console.log("click")
  let result = foodInput.value;
  let response = await axios.get(`${BASE_URL}q=${result}`);
  console.log(response.data.hits);
  const foodItems = response.data.hits
  render(foodItems)
});

// FOOOD LIST

const render = (foodItems) => {
  foodItems.forEach((food) => {
    console.log(food.recipe)
    console.log(foodItems)
    const list = document.querySelector('.food-detail')
    const element = document.createElement('ul');
    element.innerHTML =
      `<h2>${food.recipe.label}</h2>
      <p>Health Label:${food.recipe.healthLabels}</p>
      <p>Diet:${food.recipe.dietLabels}</p>
      <p>Calories: ${Math.round(food.recipe.calories)} </p>
      <button> Nutrition Info </button>
       `;

    //OPEN SIDEBAR NAV

    const getRecipeBtn = element.querySelector('button');
    getRecipeBtn.addEventListener('click', async (event) => {
      event.preventDefault();
      const nutritionElement = document.querySelector(".sidenav");
      const nutContainer = document.querySelector(".clearArea");
      nutContainer.innerHTML = "";
      food.recipe.digest.forEach((nutVal) => {
        nutContainer.innerHTML +=
          `
          <p>${nutVal.label}: ${Math.round(nutVal.total)}${nutVal.unit}</p>
          `;
      })
      nutritionElement.style.width = "500px";
      getRecipeBtn.style.display = 'none';
    });
    list.appendChild(element)
  });
};
