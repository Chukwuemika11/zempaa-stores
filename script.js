let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    // Check if there are slides
    if (slides.length > 0) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Check if the current slideIndex is within the valid range
        if (slideIndex <= slides.length) {
            slides[slideIndex - 1].style.display = "block";
        }
    }

    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

showSlides(); // Initial call to start the slideshow

const subCategoriesContainer = document.querySelector('.sub-categories');

// Example: Toggle visibility
// document.querySelector('.sub-categories-container a').addEventListener('click', () => {
//     subCategoriesContainer.classList.toggle('visible');
// });


function scrollToCategory(category) {
    var categoryElement = document.getElementById(category);
    if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: "smooth" });
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded

    // Select all links with the 'data-target' attribute
    var categoryLinks = document.querySelectorAll('[data-target]');

    // Attach click event listeners to each link
    categoryLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default behavior of the link

            // Get the target from the 'data-target' attribute
            var target = link.getAttribute('data-target');

            // Scroll to the target section
            scrollToCategory(target);
        });
    });
});

function handleSearchClick() {
  var isDropdownShown = confirm("Select from dropdown?");
  
  if (isDropdownShown) {
      var dropdown = document.getElementById("categoryDropdown");
      dropdown.style.display = "block";
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#searchInput') && !event.target.matches('.dropdown-content')) {
      var dropdown = document.getElementById("categoryDropdown");
      dropdown.style.display = 'none';
  }
};



let currentIndex = 0;
const itemsPerPage = 5; // Set the number of items visible on the screen

function moveCarousel(direction) {
    const productContainer = document.querySelector('.product-container');
    const productItems = document.querySelectorAll('.product-container > div');
    const itemWidth = productItems[0].offsetWidth + 10; // Adjust as needed

    const totalItems = productItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (direction === 'left' && currentIndex > 0) {
        currentIndex--;
    } else if (direction === 'right' && currentIndex < totalPages - 1) {
        currentIndex++;
    }

    const translateValue = -currentIndex * itemsPerPage * itemWidth;
    productContainer.style.transform = `translateX(${translateValue}px)`;

    // Toggle arrow visibility based on currentIndex
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    leftArrow.style.display = currentIndex > 0 ? 'block' : 'none';
    rightArrow.style.display = currentIndex < totalPages - 1 ? 'block' : 'none';
}


document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    leftArrow.addEventListener('click', function () {
        moveCarousel('left');
    });

    rightArrow.addEventListener('click', function () {
        moveCarousel('right');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
      var scrollToTopContainer = document.getElementById('scrollToTopContainer');
      if (window.scrollY > 100) {
        scrollToTopContainer.classList.add('show');
      } else {
        scrollToTopContainer.classList.remove('show');
      }
    });
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  

//   for media queries small screen sizes

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar){
    bar.addEventListener('click',() => {
nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',() => {
nav.classList.remove('active');
    })
}

// shop page 
            
function goToShopPage() {
    // Navigate to the shop page with the corresponding section
    window.location.href = './shop.html#shoes';
}

function goToShirtPage() {
    // Navigate to the shop page with the corresponding section
    window.location.href = './shop.html#clothes';
}

function goToJewelryPage() {
    // Navigate to the shop page with the corresponding section
    window.location.href = './shop.html#jewelry';
}
            
function goToFoodPage() {
    // Navigate to the shop page with the corresponding section
    window.location.href = './shop.html#food';
}


function culiniaryDelightsPage() {
    // Navigate to the shop page with the corresponding section
    window.location.href = './shop.html#culiniary-delights';
}

function drinksPage() {
    // Navigate to the shop page with the corresponding section
    window.location.href = './shop.html#drinks';
}

function goToSportWearsPage() {
    // Navigate to the shop page with the corresponding section
    window.location.href = './shop.html#sport-wears';
}

function othersPage() {
    // Navigate to the shop page with the corresponding section
    window.location.href = './shop.html#others';
}

function newArrivalsPage() {
    // Navigate to the shop page with the corresponding section
    window.location.href = './shop.html#new-arrivals';
}

function newArrivalsPage() {
    // Navigate to the shop page with the corresponding section
    window.location.href = './shop.html#new-arrivals';
}

function backToSchoolDealsPage() {
    // Navigate to the shop page with the corresponding section
    window.location.href = './shop.html#back-to-school-deals';
}

function comingSoonPage() {
    // Navigate to the shop page with the corresponding section
window.location.href = './shop.html#coming-soon-page';
}

// cart page 

function goToshopPage(){
  window.location.href="./shop.html"
}

 let cartItems = [];

 function addToCart(itemText, itemPrice, itemImage) {
  const existingItem = cartItems.find(item => item.text === itemText && item.image === itemImage);

  if (existingItem) {
    // Check if incrementing the quantity will exceed the limit
    if (calculateTotalQuantity() + 1 <= 100) {
      existingItem.quantity++;
    } else {
      alert("You have reached the maximum allowed total items in your cart (100).");
    }
  } else {
    // Check if adding a new item will exceed the limit
    if (calculateTotalQuantity() + 1 <= 100) {
      const newItem = {
        text: itemText,
        price: itemPrice,
        image: itemImage,
        quantity: 1
      };
      cartItems.push(newItem);
    } else {
      alert("You have reached the maximum allowed total items in your cart (100).");
    }
  }

  updateCartCount();
  saveCartToLocalStorage();
  displayCartItems();
}

function updateCartCount() {
  // For desktop
  document.getElementById('cartCountDesktop').innerText = calculateTotalQuantity();

  // For mobile
  document.getElementById('cartCountMobile').innerText = calculateTotalQuantity();
}


function calculateTotalQuantity() {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

function displayCartItems() {
  const cartItemsDiv = document.getElementById('cartItems');
  const totalPriceSpan = document.getElementById('totalPrice');
  let totalPrice = 0;

  if (cartItems.length > 0) {
    cartItemsDiv.innerHTML = ''; // Clear existing content

    cartItems.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cartItem';
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.text}">
        <p>${item.text}</p>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantityInCart('${item.text}', 'minus', ${index})">-</button>
          <input type="number" class="quantity-input" value="${item.quantity}" min="0" step="1" onchange="updateQuantityInCart('${item.text}', 'input', ${index}, this)">
          <button class="quantity-btn" onclick="updateQuantityInCart('${item.text}', 'plus', ${index})">+</button>
        </div>
        <p class="price">₦${(item.price * item.quantity).toFixed(2)}</p>
        <i class="fa fa-trash delete-icon" onclick="removeFromCart(${index})"></i>
      `;

      cartItemsDiv.appendChild(cartItem);
      totalPrice += item.price * item.quantity;
    });
  } else {
    cartItemsDiv.innerHTML = 'No items in your cart 😢.';
  }

  totalPriceSpan.innerText = totalPrice.toFixed(2);
}

function updateQuantityInCart(itemId, action, index, inputElement) {
  const quantityInput = inputElement || document.querySelector(`.cartItem:nth-child(${index + 1}) .quantity-input`);
  let newQuantity = parseInt(quantityInput.value, 10);

  if (isNaN(newQuantity) || newQuantity < 0) {
    newQuantity = 0;
  }

  // Store the total quantity before the user starts editing
  const initialTotalQuantity = calculateTotalQuantity();

  while (true) {
    if (newQuantity === 0) {
      // Exit the loop if the user sets the quantity to 0
      break;
    } else if (newQuantity === 1 && action === 'minus') {
      // Do nothing when trying to decrease from 1 to avoid negative values
    } else {
      if (action === 'plus') {
        newQuantity++;
      } else if (action === 'minus' && newQuantity > 1) {
        newQuantity--;
      }
    }

    const updatedTotalQuantity = calculateTotalQuantity() - cartItems[index].quantity + newQuantity;

    if (updatedTotalQuantity <= 100) {
      quantityInput.value = newQuantity;
      cartItems[index].quantity = newQuantity;
      break; // Exit the loop when the total is within 100
    } else {
      const userDecision = confirm(`You have exceeded the maximum allowed total items in your cart (100). 
        Total items in your cart: ${initialTotalQuantity}. 
        Do you want to reduce the quantity or clear the item from your cart?`);

      if (userDecision) {
        quantityInput.value = 0;
        cartItems[index].quantity = 0;
        break; // Exit the loop when the user clears the item
      } else {
        const newQuantityInput = prompt(`Total items in your cart: ${initialTotalQuantity}. 
          Enter a new quantity that fits within 100 items including this item "${cartItems[index].text}":`);
        newQuantity = parseInt(newQuantityInput, 10);

        if (!isNaN(newQuantity) && newQuantity >= 0 && newQuantity <= 100) {
          // Continue the loop with the updated quantity
        } else {
          alert('Please enter a valid quantity that fits within 100 items 🥹.');
        }
      }
    }
  }

  updateCartCount();
  saveCartToLocalStorage();
  displayCartItems();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartCount();
  displayCartItems();
  saveCartToLocalStorage();
}

// Add this function to handle the "Delete All Items" button click
function deleteAllItems() {
  // Clear the cartItems array
  cartItems = [];

  // Update the cart count and display
  updateCartCount();
  displayCartItems();

  // Save the empty cart to local storage
  saveCartToLocalStorage();
}


function goToPage(page) {
  // Switch to the specified page
  document.getElementById('shopPage').style.display = page === 'shop' ? 'block' : 'none';
  document.getElementById('cartPage').style.display = page === 'cart' ? 'block' : 'none';

  if (page === 'cart') {
    // Call displayCartItems when switching to the cart page
    loadCartFromLocalStorage();
    displayCartItems();
  }
}

function notReady() {
  alert("We appreciate your interest!  We're excited to announce that our new product is on its way! Stay tuned for its upcoming release. Thank you for your patience.");
}

function checkout() {
  // Implement your checkout logic here
  alert('Checkout functionality will be implemented.');
}

// Load cart items from local storage on page load
document.addEventListener('DOMContentLoaded', function () {
  loadCartFromLocalStorage();
  updateCartCount();  // Ensure the cart count is updated
  if (window.location.href.includes('cart.html')) {
    displayCartItems();
  }
});


// Save cart items to local storage
function saveCartToLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Load cart items from local storage
function loadCartFromLocalStorage() {
  if (cartItems.length === 0) {
    const storedCart = localStorage.getItem('cartItems');
    cartItems = storedCart ? JSON.parse(storedCart) : [];
  }
}


// categories page
// scrolling
  // const scrollingContainer = document.querySelector('.scrolling');

  //   scrollingContainer.addEventListener('mouseenter', () => {
  //     scrollingContainer.classList.remove('scrolling');
  //   });

  //   scrollingContainer.addEventListener('mouseleave', () => {
  //     scrollingContainer.classList.add('scrolling');
  //   });


  // blog page
       // JavaScript to toggle the visibility of the remaining text
       document.addEventListener('click', function (event) {
        const readMoreElements = document.querySelectorAll('.read-more');
        readMoreElements.forEach(readMoreElement => {
            if (event.target === readMoreElement) {
                const hiddenText = readMoreElement.nextElementSibling;
                hiddenText.style.display = 'inline'; // Show the hidden text
                readMoreElement.style.display = 'none'; // Hide the "Continue reading..." text
            }
        });
    });

  //   document.addEventListener('keydown', function (event) {
  //     if (event.key === 'Enter') {
  //         event.preventDefault();
  //         document.getElementById('yourFormId').submit();
  //     }
  // });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    fetch("process_contact.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            name,
            email,
            subject,
            message,
        }),
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Error sending message. Please try again later.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error sending message. Please try again later.");
    });
}

// darkmode

const toggle = document.querySelector('.toggle');
const changeToggleColor = document.querySelector('.changeToggleColor');
const round = document.querySelector('.round');
let isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Set initial dark mode state
updateDarkMode();

toggle.addEventListener('click', function () {
  isDarkMode = !isDarkMode;

  // Update dark mode state
  updateDarkMode();

  // Save dark mode state to localStorage
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

function updateDarkMode() {
  if (isDarkMode) {
    document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
    round.style.left = '27.5px'; // Adjust as needed for the new position
  } else {
    document.body.style.backgroundColor = '#f1f1f1';
    round.style.left = '2.5px'; // Return to the original position
  }

  changeToggleColor.style.backgroundColor = isDarkMode ? '#088178' : '#000';

  // Update styles for other elements based on dark mode state
  const elementsToUpdate = document.querySelectorAll('.des,.containerAbout h1, .arrangeSection p, .arrangeSection h2,.li-top, .containerAbout p, .blogImage p, #cartItems, [id="contact-details"], .text-content p, [id="form-details"], .spanFormDetails, .colorDark, .blogMainText, .content, .shoeText, .darkmodeColor, .orderH1, .totalPrice');

  elementsToUpdate.forEach((element) => {
    element.style.color = isDarkMode ? '#ccc' : '#000';
  });

  // const arrange = document.querySelectorAll("arrangeSection");
  // arrange.forEach((element) => {
  //   element.style.color = isDarkMode ? '#ccc' : '#000';
  // });
}

// Call the function to apply styles during initial page load
updateDarkMode();
