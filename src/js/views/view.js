import icons from 'url:../../img/icons.svg';


export default class View{

  /**
   * Function that renders the recipe and bokmarks
   * @param {object | object[]} data This is the data rendered into the DOM
   * @param {boolean} [render = true] This returns a string if false
   * @returns {undefined | string} Return a markup string if render = false
   * @this {View} This is the view object itself
   * @author Maxwell Dagadu
  */

  // renders the recipe
  render(data, render=true){
    if(!data || Array.isArray(data) && data.length === 0)
      return;

    this._data = data;
    const markUp = this._recipeMarkup();
    
    if(!render) return markUp; /* returns the markup. We only use this logic for rendering the bookmarks and the recipe list since the HTML is the same and we wouldn't want to repeat ourselves */

    this._clearParentContainer();
    this._parentElement.insertAdjacentHTML('afterbegin',markUp);
  }

  _clearParentContainer(){
    this._parentElement.innerHTML = '';
  }

    // updates the Ui.Only where the recipe servings changed
  update(data){
    
    this._data = data;
    const markUp = this._recipeMarkup();
    const newMarkup = document.createRange().createContextualFragment(markUp);
    const newElements = Array.from(newMarkup.querySelectorAll('*'));
    const currentElements = Array.from(this._parentElement.querySelectorAll('*'));
    
    newElements.forEach((newEle, i) => {
      const curElement = currentElements[i];
      // Set the text content of changed elements
      if(!curElement.isEqualNode(newEle) && newEle.firstChild?.nodeValue.trim() !== ''){
        curElement.textContent = newEle.textContent;
      }

      // Update changed attributes
      if(!curElement.isEqualNode(newEle)){
        Array.from(newEle.attributes).forEach(attr => {
          curElement.setAttribute(attr.name,attr.value);
        })
      }
    })
  }
  
  loadSpinner(){
  // Load spinner function
    const spinner = ` 
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', spinner);
  }
  
  renderError(errMessage){
    const errorHTML = `<div class="recipe__error">
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

  renderSuccessMessage(errMessage=this._successMessage){
    const successHTML = `<div class="recipe__message">
      <svg>
        <use href="${icons}#icon-smile"></use>
      </svg>
      <p>
        ${errMessage}
      </p>
    </div>`
    this._clearParentContainer();
    this._parentElement.insertAdjacentHTML('afterbegin', successHTML);
  }
}