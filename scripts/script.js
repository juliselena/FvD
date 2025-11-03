
/* CONST      */
const toggle = document.getElementById('theme-toggle');
const myButton = document.querySelector('header > button:last-of-type');
var openButton = document.querySelector("#menu-open");
openButton.onclick = openMenu;
var closeButton = document.querySelector("#menu-close");
closeButton.onclick = closeMenu;

/* FUNCTIONS  */


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

function openMenu() {
    var menu = document.querySelector("#menu");
    menu.classList.add("toonMenu");
}

function closeMenu() {
    var menu = document.querySelector("#menu");
    menu.classList.remove("toonMenu");
}



/* EVENT LISTENERS */
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

myButton.addEventListener('click', toggleFontSize);

//https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
//https://www.w3schools.com/css/css3_variables_javascript.asp
//developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties