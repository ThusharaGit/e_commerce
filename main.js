const hamburger = document.getElementById('ham-menu');
const navMenu = document.getElementById('nav-menu');


console.log('hamburger:',hamburger);
console.log(`navMenu: ${navMenu}`);


hamburger.addEventListener('click', toggleHamburgerMenu);
navMenu.addEventListener('click', toggleHamburgerMenu);




function toggleHamburgerMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
}