import View from './view.js';
import icons from 'url:../../img/icons.svg';

class PreviewView extends View{
  //_parentElement = '';

  _recipeMarkup(){
    const curRecipeId = window.location.hash.slice(1);
    return`
      <li class="preview preview__orange ${this._data.id === curRecipeId ? 'preview__selected' : ''}">
        <a class="preview__link" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.imageURL}" alt="${this._data.title}">
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
          </div>
          <!-- <div class="preview__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div> -->
        </a>
      </li>`
  }
}

export default new PreviewView();