import icons from 'url:../../img/icons.svg';
import View from './view.js';

class AddRecipeView extends View{

  _window = document.querySelector('.js__window');
  _parentElement = document.querySelector('.js__upload__form');
  _overlay = document.querySelector('.js__overlay');
  _addRecipeBtn = document.querySelector('.js__addrecipe');
  _closeModalBtn = document.querySelector('.js__close__modal');
  _successMessage = 'Recipe has been successfully created';

  constructor(){
    super();
    
    // Adds the add recipe modal
    this._addRecipeHandler();

    // Remove the add recipe modal
    this._hideModalHandler();
  }

  toggleWindow(){
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  // Close modal when we click the X button or blur area
  _hideModalHandler(){
    [this._closeModalBtn,this._overlay].forEach(close => close.addEventListener('click', this.toggleWindow.bind(this)));
  }

  uploadRecipeHandler(handler){
    this._parentElement.addEventListener('submit',function(e){
      e.preventDefault();
      // Gets the user recipe from browser and converts it into an array
      const dataArray = [...new FormData(this)]; 
      const data = Object.fromEntries(dataArray); // this converts it into an object
      handler(data);
    })
  }

  renderError(errMessage){
    const errorHTML = `<div class="recipe__upload__error">
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
      <p>
        ${errMessage}
      </p>
    </div>`
    this._clearParentContainer();
    this._parentElement.insertAdjacentHTML('afterbegin', errorHTML);
  } 
 
  // Displays the add recipe form when clicked
  _addRecipeHandler(){
    this._addRecipeBtn.addEventListener('click',function(_){
      const form = `
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST" type="text" required name="title" >
          <label>URL</label>
          <input value="TEST" type="text" required name="source_url">
          <label>Image URL</label>
          <input value="TEST" type="text" required name="image_url">
          <label> Publisher</label>
          <input value="TEST" type="text" required name="publisher">
          <label>Prep Time</label>
          <input value="23" type="text" required name="cooking_time">
          <label>Servings</label>
          <input value="23" type="text" required name="servings">
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input 
            value="0.5,kg,Rice" 
            type="text" 
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          >
          <label>Ingredient 2</label>
          <input 
            value="1,,Avocado" 
            type="text" 
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          >
          <label>Ingredient 3</label>
          <input 
            value=",,Salt" 
            type="text" 
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          >
          <label>Ingredient 4</label>
          <input 
            type="text" 
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          >
          <label>Ingredient 5</label>
          <input 
            type="text"
            name="ingredient-5" 
            placeholder="Format: 'Quantity,Unit,Description'"
          >
          <label>Ingredient 6</label>
          <input 
            type="text" 
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          >
        </div>

        <button class="upload__btn">
          <svg>
            <use href="${icons}#icon-upload-cloud"></use>
          </svg>
          <span>upload</span>
        </button>`

      this._clearParentContainer();
      this._parentElement.insertAdjacentHTML('afterbegin',form);
      this.toggleWindow();
    }.bind(this));
  }

}
export default new AddRecipeView(); 