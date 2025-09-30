
/* CONST      */

const slider = document.querySelector('#homePagina ul:first-of-type');
const items = slider.querySelectorAll('li');
const dotsWrapper = document.querySelector('#homePagina ul:first-of-type + div');

const section = document.querySelector('#homePagina > section:nth-of-type(1)');
const articlesContainer = section.querySelector('div');
const btnPrev = section.querySelector('button:first-of-type');
const btnNext = section.querySelector('button:last-of-type');

const toggle = document.getElementById('theme-toggle');
const myButton = document.querySelector('header > button:last-of-type');


/* FUNCTIONS  */
//bolletjes aanmaken
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

//voor de pijltjes knoppen
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
//tekst grootte aanpassen
let isLargeFont = false;
function toggleFontSize() {
    const root = document.documentElement;
    if (!isLargeFont) {
        root.style.setProperty('--base-font-size', '150%');
        isLargeFont = true;
    } else {
        root.style.setProperty('--base-font-size', '100%');
        isLargeFont = false;
    }
}


createDots();


/* EVENT LISTENERS */
btnPrev.addEventListener('click', scrollPrev);
btnNext.addEventListener('click', scrollNext);

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

myButton.addEventListener('click', toggleFontSize);

//https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp