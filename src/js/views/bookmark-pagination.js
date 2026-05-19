import View from './view.js';
import icons from 'url:../../img/icons.svg';

class BookmarkPagination extends View{
  _parentElement = document.querySelector('.js__bookmark__btns');
  _data;
  

  // Get the current bookmark page
  bookmarkPageHandler(handler){
    this._parentElement.addEventListener('click',function(e){
      const btn = e.target.closest('.js_bookmark_btn_arrow');

      if (!btn) return;

      const getCurrentPage = btn.dataset.pageNumber;
      if(getCurrentPage < 1) return;
      handler(+getCurrentPage);
    })
  }

  _recipeMarkup(){
    const totalBookmarkPage = Math.ceil(this._data.bookmarks.length / this._data.bookmarksPerPage);

    if(this._data.bookmarkPaginationNumber === 1 && totalBookmarkPage > 1){
      return `
      <div></div>
      <button class="bookmark__button__arrow js_bookmark_btn_arrow" data-page-number="${this._data.bookmarkPaginationNumber + 1}">
        <span>&rightarrow;</span>
      </button>`
    }

    if (this._data.bookmarkPaginationNumber === totalBookmarkPage && totalBookmarkPage > 1){
      return`
        <button class="bookmark__button__arrow js_bookmark_btn_arrow" data-page-number="${this._data.bookmarkPaginationNumber - 1}">
          <span>&LeftArrow;</span>
        </button>
      `  
    }

    if(this._data.bookmarkPaginationNumber < totalBookmarkPage){
      return`
        <button class="bookmark__button__arrow js_bookmark_btn_arrow" data-page-number="${this._data.bookmarkPaginationNumber - 1}">
          <span>&LeftArrow;</span>
        </button>
        <button class="bookmark__button__arrow js_bookmark_btn_arrow" data-page-number="${this._data.bookmarkPaginationNumber + 1}">
          <span>&rightarrow;</span>
        </button>
      `
    }

    return '';
  }

}

export default new BookmarkPagination();