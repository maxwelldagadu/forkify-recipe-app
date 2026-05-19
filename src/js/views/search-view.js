

class SearchView{
  _searchKeyword = document.querySelector('.js-search-field');
  _searchForm = document.querySelector('.js-search-form');

  getKeyword(){
    const keyword =this._searchKeyword.value;
    this._clearInput();
    return keyword;
  }

  addHandlerSearch(handler){
  this._searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    handler();
  });
  }

  _clearInput(){
    this._searchKeyword.value = '';
  }
}

export default new SearchView();