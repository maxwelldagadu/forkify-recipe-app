import icons from 'url:../../img/icons.svg';
import View from './view.js';


class PaginationView extends View{

  _parentElement = document.querySelector('.js-pagination');
  _data;
  
  // this method gets the page number and passes it to the handler function
  // this method also uses event delegation
  paginationHandler(handler){
    this._parentElement.addEventListener('click', function(e){
      const paginationBtn = e.target.closest('.pagination__btn');

      if(!paginationBtn) return;

      const newPageRender = +paginationBtn.dataset.goto;
      handler(newPageRender);
    });
  }

  _recipeMarkup(){
    const currentPage = this._data.pageNumber;
    const totalPageNumber = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    // return`<h2>${totalPageNumber}<h2>`;

    // if we are on page 1 and there're some other pages
    if(currentPage === 1 && totalPageNumber > 1){
      return `
      <button></button> <!-- Added this empty button here to maintain the flex order when user is on page 1 -->
      <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next pagination__btn">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>`;
    }

    // We have reached the last page
    if(currentPage === totalPageNumber && totalPageNumber > 1){
      return `
      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev pagination__btn">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>`
      
    }

    // other pages
    if(currentPage < totalPageNumber){
      return `
      <button data-goto="${currentPage - 1}" class="btn--inline pagination__btn--prev pagination__btn">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
      </button>
      <button data-goto="${currentPage + 1}" class="btn--inline pagination__btn--next pagination__btn">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
      `
    }

    // page 1 and there're no other pages
    return '';
  }
}


export default new PaginationView();