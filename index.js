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
