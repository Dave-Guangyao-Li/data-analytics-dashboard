// javascript


const menuBtn = document.querySelector('.menu-btn');
const backBtn = document.querySelector('.back-btn');
const menu = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)'; // this will move the menu to the right to show it
})

backBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(-100%)'; // this will move the menu back to the left to hide it
})

// // clientWidth is the width of the browser window, if it is greater than 700px, the menu will be shown
// window.addEventListener('resize', event => {
//     if (document.body.clientWidth >= 700)
//         menu.style.transform = 'translateX(0)'
//     else
//         menu.style.transform = 'translateX(-100%)'
// })
