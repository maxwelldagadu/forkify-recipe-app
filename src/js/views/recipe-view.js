
import icons from 'url:../../img/icons.svg';
import Fracty from 'fracty';
import View from './view.js';

class RecipeView extends View{
  _parentElement = document.querySelector('.recipe__js');
  _data;
  _successMessage = 'Recipe successfully found';

  addRecipeHandler(handler){
    ['hashchange','load'].forEach(evenName => window.addEventListener(evenName, handler));
  }
  
  // Add bookmark
  addBookmark(handler){
    this._parentElement.addEventListener('click', function(e){
      const bookmarkBtn = e.target.closest('.js__bookmark__btn');

      if(!bookmarkBtn) return;
      handler();
    })
  }

  // On - , +  button click, the servings either decrease or increase
  updateServingsHandler(handler){
    this._parentElement.addEventListener('click',function(e){
      const btn = e.target.closest('.js__btn__servings');
      if(!btn) return;
      const {updateTo} = btn.dataset;
      if(+updateTo === 0) return;
      handler(+updateTo);
    })
  }

  _recipeMarkup(){
    return `
    <figure class="recipe__fig">
      <img class="recipe__img" src="${this._data.imageURL}" alt="${this._data.imageUrl}">
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
    <div class="recipe__detail">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny js__btn__servings" data-update-to="${this._data.servings - 1}">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny js__btn__servings" data-update-to="${this._data.servings + 1}">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round js__bookmark__btn">
        <svg>
          <use href="${icons}#icon-bookmark${this._data.bookmarked ? '-fill' : ''}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe Ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(ing => this._generateMarkupIngredient(ing)).join('')}
      </ul>
    </div>

    <div class="recipe__direction">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__direction--text">
        This recipe was carefully designed and tested by <span>The Pioneer Woman</span>. <br>
        Please check out directions at their wedsite.
      </p>
      <a class="btn--small recipe__btn" 
      href="${this._data.sourceUrl}" target="_blank">
        <span>Directions</span>
        <svg>
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>
    `;
  }

  _generateMarkupIngredient(ing){
    return `
    <li class="recipe__ingredient">
      <svg>
        <use href="${icons}#icon-check"></use>
      </svg>
      <span class="recipe__quantity">${ing.quantity ? Fracty(ing.quantity): ''}</span>
      <div class="recipe__description">
        <span class="recipe__unit">${ing.unit}</span>
        ${ing.description}
      </div>
    </li>
    `
  }
}

export default new RecipeView();


