export function renderFilterToDOM(food, container) {
    let html = ``;
    for (let i = 0; i < food.length; i++) {
      html += `
      <div class="col">
        <a class="card" href="details.html?id=${food[i].idMeal}">
          <div class="imgbx">
            <img class="card-img-top" src="${food[i].strMealThumb}" alt="Card image cap">
          </div>
          <div class="card-body">
            <h4 class="card-title">${food[i].strMeal}</h4>
          </div>
        </a>
      </div>
      `
    }
    container.innerHTML = html;
  }
export function renderSearchToDOM(food, container) {
    let html = ``;
    for (let i = 0; i < food.length; i++) {
      html += `
      <div class="col">
        <a class="card" href="details.html?id=${food[i].idMeal}">
          <div class="imgbx">
            <img class="card-img-top" src="${food[i].strMealThumb}" alt="Card image cap">
          </div>
          <div class="card-body">
            <h4 class="card-title">${food[i].strMeal}</h4>
          </div>
        </a>
      </div>
      `
    }
    container.innerHTML = html;
  }

  
export function renderCaurouselToDOM(food, container) {
    let html = ``;
    for (let i = 0; i < food.length; i++) {
      html += `
        <a class="card" id="card" href="details.html?id=${food[i].idMeal}">
          <div class="imgbx">
            <img class="card-img-top" src="${food[i].strMealThumb}" alt="Card image cap">
          </div>
          <div class="card-body">
            <h4 class="card-title">${food[i].strMeal}</h4>
          </div>
        </a>
          `
    }
    container.innerHTML = html;
  }
  
export  function initCarousel() {
    $('.owl-carousel').owlCarousel({
      autoplay: true,
      autoplayTimeout: 1000,
      loop: true,
      margin: 10,
      nav: true,
      navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
        },
        1000: {
          items: 3
        }
      }
    });
  }

export const loader = document.querySelector('.loader');
export const loader2 = document.querySelector('.loader-main2');
export const filter = document.querySelector('.filter');
export const container_wrapper = document.querySelector('.container-wrapper');
export const text = document.querySelector('.text');
export const owl_carousel = document.querySelector('.owl-carousel');