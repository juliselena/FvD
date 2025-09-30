
const slider = document.querySelector('#homePagina ul:first-of-type');
const items = slider.querySelectorAll('li');
const dotsWrapper = document.querySelector('#homePagina ul:first-of-type + div');

const section = document.querySelector('#homePagina > section:nth-of-type(1)');
const articlesContainer = section.querySelector('div');
const btnPrev = section.querySelector('button:first-of-type');
const btnNext = section.querySelector('button:last-of-type');


function createDots() {
    items.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.addEventListener('click', () => {
            slider.scrollTo({
                left: slider.clientWidth * index,
                behavior: 'smooth'
            });
        });
        dotsWrapper.appendChild(dot);
    });
}

function scrollPrev() {
    articlesContainer.scrollBy({
        left: -articlesContainer.offsetWidth / 2,
        behavior: 'smooth'
    });
}

function scrollNext() {
    articlesContainer.scrollBy({
        left: articlesContainer.offsetWidth / 2,
        behavior: 'smooth'
    });
}


createDots();

btnPrev.addEventListener('click', scrollPrev);
btnNext.addEventListener('click', scrollNext);

const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


//bronnen: https://stackoverflow.com/questions/75703778/how-to-build-a-simple-carousel-with-vanilla-javascript?