import View from './view.js';
import icons from 'url:../../img/icons.svg';
import PreviewView from './preview-view.js';

class ResultsView extends View{
  _parentElement = document.querySelector('.results__js');
  _data;
  _successMessage = 'Recipe successfully found';

 
  _recipeMarkup(){
    return this._data.map(results => PreviewView.render(results,false)).join('');
   } 

}

export default new ResultsView();