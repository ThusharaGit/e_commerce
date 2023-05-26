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

fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
   const products = data.products;
   const product25 = products[25];
   const product25photos = product25.images;
   renderSlider(product25photos);
})

 .catch(error => {
     console.log(error)
 });

function renderSlider(photos) {
    const slider = document.getElementById('slider');

    photos.slice(0,4).forEach((photoUrl) => {
    const image = document.createElement('img');
    image.src = photoUrl;
    slider.appendChild(image);
    });
    
    const pagination = document.getElementById('pagination');

    pagination.addEventListener('click', handlePaginationClick);

    function handlePaginationClick(event) {
      const clickedDot = event.target;
      if(clickedDot.classList.contains('page-dot')){
          const index = parseInt(clickedDot.dataset.index);
          scrollToIndex(index);
      } 
    }
    
    function scrollToIndex(index) {
        const scrollAmount = index * slider.offsetWidth;
        slider.scrollTo({
            left: scrollAmount,
            behavior: 'smooth',
        });
    }

}