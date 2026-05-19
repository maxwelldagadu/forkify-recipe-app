import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as Model from './model.js';
import RecipeView from './views/recipe-view.js';
import SearchView from './views/search-view.js';
import ResultsView from './views/results-view.js';
import PaginationView from './views/pagination-view.js';
import BookmarksView from './views/bookmarks-view.js';
import AddRecipeView from './views/add-recipe-view.js';
import { successMessageTimeout } from './config.js';
import BookmarkPaginationView from './views/bookmark-pagination.js';

// Hot module reload
// if(module.hot){
//   module.hot.accept();
// }

//// MAKE API REQUEST ///


// Logic for rendering recipe in UI
async function controlRecipes(){
  try{
    // Get recipe id from browser window
    const recipeId = window.location.hash.slice(1);
  
    if (!recipeId) return;

    // render spinner
    RecipeView.loadSpinner();
     
    // Load recipe
    await Model.loadRecipe(recipeId);

    // Rendering recipe
    RecipeView.render(Model.state.recipe);

    /* Re-renders the recipe list after we added the recipe selector class
    that happens when a recipe is clicked */
    ResultsView.update(Model.getSearchResultsPage());

    // Render the bookmarks
    BookmarksView.render(Model.getBookmarksPage(Model.state.bookmarkPaginationNumber));

    // Re-render the pagination buttons
    BookmarkPaginationView.render(Model.state);

  }
  catch(err){
    RecipeView.renderError(err);
  }
}


// Logic for searching recipe with a keyword
const controllSearchResult = async function(){
  try{
    ResultsView.loadSpinner(); // Loads the search spinner in the results section

    const query = SearchView.getKeyword(); // Get's the searched keyword from the search field
    if(!query) return;

    // making the search 
    await Model.searchRecipeResult(query);

    /* ResultsView.render(Model.state.searchData.results), renders the entire search result in the ui */
    ResultsView.render(Model.getSearchResultsPage()); // this only renders 10 recipes per page

    // Render the initial pagination buttons
    PaginationView.render(Model.state.searchData);
  }
  catch(err){
    ResultsView.renderError(err);
  }
}
    

/* Function that gets a new array of recipe to be rendered per page.
 eg. 10 recipes per page */

const renderNewRecipeList = function(gotoPage){

  // Renders the new recipe array
  ResultsView.render(Model.getSearchResultsPage(gotoPage));

  // Renders the new pagination buttons
  PaginationView.render(Model.state.searchData);
}

// This handler increases or decreases the servings
const controlServings = function(newServings){

  // update the recipe servings (in state)
  Model.updateServings(newServings);

  /* NOTE down below, we will use the update() method in place of render()
    because we only need to update the neccessary parts that needs to be updated
    in the UI. Not the entire object
  */

  // Re-reendering the new recipe. 
  // RecipeView.render(Model.state.recipe);
  
  // Re-rendering the new recipe. Quantity is being manipualted here
  RecipeView.update(Model.state.recipe);
}


// Add a recipe to bookmark
const controlAddBookmark = function(){
  // Add the bookmark
  if(!Model.state.recipe.bookmarked) Model.bookmarkRecipe(Model.state.recipe);
  // Remove the bookmark
  else Model.removeBookmark(Model.state.recipe);

  RecipeView.update(Model.state.recipe); // Update the recipe rendered in UI
  
  if(Model.state.bookmarks.length > 0){ 
    // Render the bookmarks
    BookmarksView.render(Model.getBookmarksPage(Model.state.bookmarkPaginationNumber));

    // Shows arrow buttons on next page or previous page on button click
    BookmarkPaginationView.render(Model.state);
  }
  else{
    // insert message if bookmark list is empty
    BookmarksView.bookmarkMessage();
  }
}


// Bookmarks pagination
const controlBookmarkPagination = function(pageNumber){

  // Render the bookmarks
  BookmarksView.render(Model.getBookmarksPage(pageNumber));

  // Update the bookmark
  BookmarkPaginationView.render(Model.state);
}


// Render the bookmark from local storage if any on initial page load
const controlRenderBookmark = function (){
  // Renders the bookmark
  BookmarksView.render(Model.state.bookmarks);
}


// Upload the user created recipe
const controlAddRecipe = async function(newRecipe){
  try{
    // Show spinner on upload
    AddRecipeView.loadSpinner();

    // Uploading the recipe
    await Model.uploadRecipe(newRecipe);

    // Render the recipe;
    RecipeView.render(Model.state.recipe);

    // Display Success message
    AddRecipeView.renderSuccessMessage();

     // Re-render the bookmark
    BookmarksView.render(Model.getBookmarksPage(Model.state.bookmarkPaginationNumber));

    // Render the bookmark pagination
    BookmarkPaginationView.render(Model.state);

    // Removes the modal after 3 seconds of creating the recipe
    setTimeout(()=>{
      AddRecipeView.toggleWindow();
    },successMessageTimeout * 1000)
  }
  catch(error){
    AddRecipeView.renderError(error);
  }
}


const init = () => {

  // Get's local storage bookmark and renders it in the bookmark list on page load
  BookmarksView.renderLocalStorageHandler(controlRenderBookmark);

  // Event listener that  renders the recipe
  RecipeView.addRecipeHandler(controlRecipes);

  // This handler increases or decreases the servings
  RecipeView.updateServingsHandler(controlServings);

  // Event listener that get's recipe result afer search button is clicked
  SearchView.addHandlerSearch(controllSearchResult);

  // Event listener that renders a new recipe list anytime page buttons are clicked
  PaginationView.paginationHandler(renderNewRecipeList);

  // Adds a recipe to the bookmark
  RecipeView.addBookmark(controlAddBookmark);

  // Control bookmark per page
  BookmarkPaginationView.bookmarkPageHandler(controlBookmarkPagination);

  // Add recipe
  AddRecipeView.uploadRecipeHandler(controlAddRecipe);
}

init();

////// NOTE //////
//  The getSearchResultsPage() replaces this function. getSearchResultsPage() is used to get 10 recipes per page and also to get the next or previous page of the search result. The controllSearchResult() function is used to get all the search result which could be a huge Array and render it in the ui. The getSearchResultsPage() function is used to get the search result for a specific page number and render it in the ui.
// // Logic for rendering lists of recipe after search
// const controllResults = function(){
//   // Passing the list of recipe result to the result view
//   ResultsView.render(Model.state.searchData.results)
// }

