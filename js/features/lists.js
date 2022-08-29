import { renderFilterToDOM } from "../common.js";
import { getData,LIST_QUERY,FILTER_QUERY} from "../services.js";

export function getCategories(){
    getData(`${LIST_QUERY}?c=list`).then((result) => {
    // food = result.meals;
    renderDropdownToDOM(result.meals, 'categories');
    }).catch(err => {
        console.log(err);
    });
}

export function getAreas(){
    getData(`${LIST_QUERY}?a=list`).then((result) => {
    // food = result.meals;
    renderDropdownToDOM(result.meals, 'areas');
    }).catch(err => {
        console.log(err);
    })
}


export function renderDropdownToDOM (food, id){
    for(let i = 0; i < food.length; i++){
        let html = ``;
        for (let i = 0; i < food.length; i++) {
          html += `
            <option  value="${id == 'areas' ? food[i].strArea : food[i].strCategory}">${id == 'areas' ? food[i].strArea : food[i].strCategory}</option>
          `
        }
        document.getElementById(id).innerHTML = html;
    }
}


export function onCategoryChange(){
  categories.addEventListener('change', function (e) {
    console.log(e.target.value);
    const category = e.target.options[e.target.selectedIndex].textContent;
    console.log(category);
    getData(`${FILTER_QUERY}?c=${category}`).then((result) => {
        
        const food = result.meals;
        document.querySelector('.h3').innerText = (`${category} MEALS`)
        // document.querySelector('.h4').innerText = (`${food[i].strMeal}`)
        renderFilterToDOM(food, document.querySelector('#row'))
      })
      .then(()=>{
        loader.classList.add('d-none');
      })
      .catch(function (err) {
        console.log(err)
      })
  })
}


export function onAreaChange(){
  areas.addEventListener('change', function (e) {
    console.log(e.target.value);
    const area = e.target.options[e.target.selectedIndex].textContent;
    console.log(area);
    getData(`${FILTER_QUERY}?a=${area}`).then((result) => {
        const food = result.meals;
        document.querySelector('.h3').innerText = (`${area} MEALS`)
        // document.querySelector('.h4').innerText = (`${food[i].strMeal}`)
        renderFilterToDOM(food, document.querySelector('#row'))
      })
      .then(()=>{
        loader.classList.add('d-none');
      }).catch(function (err) {
        console.log(err)
      })
  })
}
  
 