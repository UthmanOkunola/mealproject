import { SEARCH_QUERY, getData } from '../services.js'
import { renderCaurouselToDOM, renderFilterToDOM, renderSearchToDOM } from '../common.js'
import { initCarousel } from '../common.js'
import { loader, loader2, filter, container_wrapper, owl_carousel, text } from '../common.js'


export function getMeals() {
  getData(`${SEARCH_QUERY}?f=b`).then(result => {
    const food = result.meals;
    renderCaurouselToDOM(food, document.getElementById('owl-carousel'))
    initCarousel();
  }).then(() => {
    loader.classList.add('d-none');
  }).catch(function (err) {
    console.log(err)
  })
}

export function getLatestMeals() {
  getData(`${SEARCH_QUERY}?f=c`).then(result => {
    const food = result.meals;
    renderFilterToDOM(food, document.querySelector('#row'))
  }).then(() => {
    console.log(loader)
    loader2.classList.add('d-none');
  }).catch(function (err) {
    console.log(err)
  })
}


// let counter = 0;
// let timeOutIndex = setInterval(() => {
//   counter ++
//   if(counter === 10){
//     clearTimeout(timeOutIndex)
//   }
//   console.log(counter)


// }, 1000);

let requestIndex = '';

input.addEventListener('input', function (e) {
  filter.classList.add('d-none');
  container_wrapper.classList.add('d-none');
  owl_carousel.classList.add('d-none');
  text.classList.add('d-none');
  loader.classList.remove('d-none');
  let searchWord = e.target.value;
  console.log(searchWord);
  // button.addEventListener('click', function (e) {
  //   getData(`${SEARCH_QUERY}?s=${searchWord}`).then((result) => {
  //     console.log(result);
  //     const food = result.meals;
  //     renderSearchToDOM(food, document.querySelector('#row'))
  //   }).then(() => {
  //     loader.classList.add('d-none');
  //     container_wrapper.classList.remove('d-none');
  //   }).catch(function (err) {
  //     console.log(err);
  //   })
  // })
  if (searchWord !== '' || searchWord !== null) {
    if (requestIndex) clearInterval(requestIndex)
    requestIndex = setTimeout(function () {
      getData(`${SEARCH_QUERY}?s=${searchWord}`).then((result) => {
        console.log(result);
        const food = result.meals;
        if(food == null || food == ''){
          text.classList.remove('d-none');
          const alert = `${searchWord} isn't available on our menu`
          loader.classList.add('d-none');
          document.querySelector('.text').innerHTML = alert;
        }
        renderSearchToDOM(food, document.querySelector('#row'))
      }).then(() => {
        loader.classList.add('d-none');
        container_wrapper.classList.remove('d-none');
      }).catch(function (err) {
        console.log(err);
      })
    }, 2000)
  } else {
      window.addEventListener('load', function (e) {
  })
}
})