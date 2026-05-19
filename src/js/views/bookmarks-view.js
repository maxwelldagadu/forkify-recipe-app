import View from './view.js';
import icons from 'url:../../img/icons.svg';
import PreviewView from './preview-view.js';

class BookmarksView extends View{
  _parentElement = document.querySelector('.js__bookmark__list');
  _data;
  _successMessage = 'Recipe successfully found';

  renderLocalStorageHandler(handler){
    window.addEventListener('load', handler);
  }

  _recipeMarkup(){
    return this._data.map(bookmark => PreviewView.render(bookmark,false)).join('');
  } 

  bookmarkMessage(){
    const message = `
    <div class="message">
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
      <p>
        No bookmarks yet. Find a nice recipe and bookmark it
      </p>
    </div>`
    this._clearParentContainer();
    this._parentElement.insertAdjacentHTML('afterbegin',message);
  }

}
 
export default new BookmarksView();