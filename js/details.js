const loader = document.querySelector('.loader');
const container = document.querySelector('.container_details');
container.classList.add('d-none')
const param = new URLSearchParams(location.search);
const id = param.get('id');
console.log(id);
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((fullfilled) => {
        return fullfilled.json();
    })
    .then(({ meals }) => {
        const [details] = meals;
        const ingredients = getIngredients(details);
        console.log(details)
        renderIngredients(ingredients, document.getElementById('bodylists'));
        const {strMeal, strMealThumb, strInstructions,strYoutube} = details;
        document.getElementById('container_body').firstElementChild.innerHTML = strMeal;
        document.getElementById('imgbx').firstElementChild.src = strMealThumb;
        document.getElementById('description').firstElementChild.nextElementSibling.innerHTML = strInstructions;
        rendervideo(strYoutube,document.querySelector('.modal-body'));
    }).then(()=>{
        loader.classList.add('d-none')
        container.classList.remove('d-none');
    })
    .catch(function (err) {
        console.log(err);
    })

function getIngredients(meal) {
    const Ingredients = [];
    for (let key in meal) {
        if (key.includes('strIngredient') && meal[key] != "" && meal[key] != null) {
            Ingredients.push(meal[key])
        }
    }
    return Ingredients;

}

function renderIngredients(ingredients, container) {
    let html = ``;
    for (let i = 0; i < ingredients.length; i++) {
        html += `
        <li>${ingredients[i]}</li>

        `
    }
    container.innerHTML = html;
}

function rendervideo(url, container){
    if(url == "" || url == null){
        alert('No Video is Available!!!')
    }
    let html = `<iframe width="100%" id="iframe" height="409" src="${url.replace('watch','embed').replace('?v=','/')}" title="Learn DOM Manipulation In 18 Minutes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    container.innerHTML = html
    
}
