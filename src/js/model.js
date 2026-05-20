import async from 'regenerator-runtime/runtime';
import {API_URL,RECIPE_URL,RESULTS_PER_PAGE,API_KEY,BOOKMARKS_PER_PAGE} from './config.js';
import {getJSON,sendJSON} from './helpers.js';

// model export
export const state = {
  recipe:{},
  searchData: {
    query:'',
    results:[],
    resultsPerPage: RESULTS_PER_PAGE,
    pageNumber: 1,
  },
  bookmarks:[],
  bookmarkPaginationNumber: 1,
  bookmarksPerPage: BOOKMARKS_PER_PAGE,
}

// Simply recreate the data received in the preffered format
const createRecipeObject = function(data){
  const {recipe} = data.data;

  return {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      cookingTime: recipe.cooking_time,
      sourceUrl: recipe.source_url,
      imageURL: recipe.image_url,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
      ...(data.key && {key:data.key}) /* This only adds the key to recipes that the user creates. 
                                       Not just every recipe we render in the UI */
    }
}

// Search/Get recipe by id
export const loadRecipe = async function(recipeId){
  try{
    const getRecipe = await getJSON(`${API_URL}${recipeId}`);  
    state.recipe = createRecipeObject(getRecipe);

    /* Adds a bookmarked = true property on the rendered recipe 
    if it exists in the bookmarks array so the recipe will be 
    rendered in the bookmark section in the UI */

    if(state.bookmarks.some(bookmark => bookmark.id === recipeId))
      state.recipe.bookmarked = true;

    else{
      state.recipe.bookmarked = false;
    }
  }
  catch(err){
    throw err;
  }
}

// Search recipe by keyword
export const searchRecipeResult = async function(query){
  try{
    state.searchData.query = query;

    const getRecipe = await getJSON(RECIPE_URL + query);
    const data = getRecipe.data?.recipes;
    // check if recipe array is empty
    if(Array.isArray(data) && data.length === 0){
      throw new Error(`No recipe found for ${query}! Please try another keyword`)}
    // storing props in the state
    state.searchData.results = data.map(recipeData =>{
      return {id: recipeData.id,
        imageURL: recipeData.image_url,
        title: recipeData.title,
        publisher: recipeData.publisher}
    });

    state.searchData.pageNumber = 1; // Reset page number to page 1 after every search
  }
  catch(err){
    throw err;
  }
}

// Get 10 recipes per page
export const getSearchResultsPage = function(page = state.searchData.pageNumber){
  state.searchData.pageNumber = page; // Store the current page number 
  const start = (page-1)* state.searchData.resultsPerPage; // 0
  const end = page * state.searchData.resultsPerPage; // 10
  return state.searchData.results.slice(start,end);
}

// Update the recipe servings render
export const updateServings = function(newServings){
  state.recipe.ingredients.forEach(ing => {
  ing.quantity = ing.quantity * newServings / state.recipe.servings
  });

  // update the main servings
  state.recipe.servings = newServings;
}


// Persist bookmark. We store the boomark in the local storage
const persistBookmarks = function(){
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}


// Adding a recipe to a bookmark
export const bookmarkRecipe = function(recipe){
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  // Save bookmark on add bookmark
  persistBookmarks();
}

// Deleting the bookmark
export const removeBookmark = function(recipe){
  const index = state.bookmarks.findIndex(bookmark => bookmark.id === recipe.id);
  state.bookmarks.splice(index,1);

  // Mark current recipe as not bookmarked
  if(recipe.id === state.recipe.id) state.recipe.bookmarked = false;

  // Save bookmark on unadd bookmark
  persistBookmarks();
}

/* This init function  gets the bookmark in local 
storage and stores it back into the bookmarks array*/

const init = function(){
  const data = localStorage.getItem('bookmarks');

  if(data) state.bookmarks = JSON.parse(data);
}

init();

// Get 5 bookmarks maximum per page 

export const getBookmarksPage = function (page=state.bookmarkPaginationNumber){
  state.bookmarkPaginationNumber = page; // Stores the current bookmark page number
  const startIndex = (state.bookmarkPaginationNumber - 1) * state.bookmarksPerPage; // 0
  const endIndex = state.bookmarkPaginationNumber  * state.bookmarksPerPage; // 4
  return state.bookmarks.slice(startIndex,endIndex);
}


// Uploading user recipe 
export const uploadRecipe = async function(userRecipe){
  try{
    const newRecipeArray = Object.entries(userRecipe); // converts the object back to an array

    const ingredients = newRecipeArray.filter(recipe => {
          return recipe[0].startsWith('ingredient') && recipe[1] !== '';
        }).map(ingDetail => {
          const checkIngredient = ingDetail[1].split(',').map(ing => ing.trim());
          // checks if the value array has 3 value
          if (checkIngredient.length !== 3) throw new Error('Please make sure your input follows the right format');

          const [quantity,unit,description] = checkIngredient;

          return {quantity: quantity ? +quantity: '',unit: unit ? unit : '',description: description ? description: ''};
        })

    const recipe = {
      title: userRecipe.title,
      publisher: userRecipe.publisher,
      image_url: userRecipe.image_url,
      source_url: userRecipe.source_url,
      servings: +userRecipe.servings,
      cooking_time: +userRecipe.cooking_time,
      ingredients,
    }

    // Send the user created recipe to the API
    const sentData = await sendJSON(`${API_URL}?key=${API_KEY}`,recipe);

    // Receive the recipe data sent back. Store it the sate recipe object
    state.recipe = createRecipeObject(sentData);

    // Bookmarks the recipe
    bookmarkRecipe(state.recipe);
  } 
  catch(err){
    throw err;
  }
}