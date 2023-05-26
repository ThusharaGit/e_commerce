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
   renderProductDetails(product25);
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

function renderProductDetails(product) {
    const titleElement = document.getElementById('product-title');
    const descriptionElement = document.getElementById('product-description');
    const priceElement = document.getElementById('product-price');
    titleElement.innerText = product.title;
    descriptionElement.innerText =product.description;
    priceElement.innerText = `EUR ${product.price}`;

    const buyBtn = document.getElementById('buy-button');
    buyBtn.addEventListener('click', alertOnclick);

function alertOnclick() {
    alert(`${product.title} for EUR ${product.price} has been added to you`)
}

}




