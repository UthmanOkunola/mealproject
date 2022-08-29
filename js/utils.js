const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

function renderDropdownToDOM (food, id){
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

