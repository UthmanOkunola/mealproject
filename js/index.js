
import {getMeals,getLatestMeals} from './features/meals.js';
import {getCategories,getAreas,onAreaChange,onCategoryChange} from './features/lists.js';

window.addEventListener('load', function(){
  getMeals();
  getLatestMeals();
  getCategories();
  onCategoryChange()
  getAreas();
  onAreaChange();
})







