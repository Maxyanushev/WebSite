// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');
if (navToggle && menu){
  navToggle.addEventListener('click', ()=>{
    const isOpen = menu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver(entries => {
  for (const entry of entries){
    if (entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }
}, {threshold: .12});
revealEls.forEach(el => observer.observe(el));

// Newsletter form mock submit
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm){
  newsletterForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = /** @type {HTMLInputElement} */(document.getElementById('newsletter-email'));
    const message = /** @type {HTMLElement} */(newsletterForm.querySelector('.form-message'));
    if (email && email.validity.valid){
      message.textContent = 'Dziękujemy! Potwierdź zapis w swojej skrzynce.';
      message.style.color = '#2b6a2b';
      email.value = '';
    } else {
      message.textContent = 'Podaj poprawny adres e‑mail.';
      message.style.color = '#8a1f1f';
    }
  });
}

// Contact form validation (mock)
const contactForm = document.getElementById('contact-form');
if (contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = /** @type {HTMLInputElement} */(document.getElementById('name'));
    const email = /** @type {HTMLInputElement} */(document.getElementById('email'));
    const msg = /** @type {HTMLTextAreaElement} */(document.getElementById('message'));
    const message = /** @type {HTMLElement} */(contactForm.querySelector('.form-message'));
    if (name.value.trim() && email.validity.valid && msg.value.trim()){
      message.textContent = 'Dziękujemy za wiadomość! Odpiszemy wkrótce.';
      message.style.color = '#2b6a2b';
      name.value = '';
      email.value = '';
      msg.value = '';
    } else {
      message.textContent = 'Uzupełnij wszystkie pola poprawnymi danymi.';
      message.style.color = '#8a1f1f';
    }
  });
}

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl){
  yearEl.textContent = String(new Date().getFullYear());
}

// Product Search and Filter System
let allProducts = [];
let filteredProducts = [];

// Product data structure
const productData = [
  {
    id: 'patery',
    name: 'Patery',
    category: 'patery',
    price: 120,
    image: 'images/products/pateraczarna/product97.jpeg',
    url: 'patery.html',
    description: 'Eleganckie patery do dekoracji'
  },
  {
    id: 'ozdoby-choinkowe',
    name: 'Ozdoby choinkowe',
    category: 'ozdoby',
    price: 80,
    image: 'images/products/ozdonynachoinke/ozdoby.jpg',
    url: 'ozdoby-choinkowe.html',
    description: 'Unikatowe ozdoby choinkowe'
  },
  {
    id: 'domino',
    name: 'Domino',
    category: 'domino',
    price: 150,
    image: 'images/products/dominobiale/dominobiale3.jpg',
    url: 'domino.html',
    description: 'Unikatowe zestawy do gry'
  },
  {
    id: 'zegary',
    name: 'Zegary',
    category: 'zegary',
    price: 200,
    image: 'images/products/zegarroz/3.jpeg',
    url: 'zegary.html',
    description: 'Funkcjonalne dzieła sztuki'
  },
  {
    id: 'podkladki',
    name: 'Podkładki',
    category: 'podkladki',
    price: 60,
    image: 'images/products/product5.jpg',
    url: 'podkladki.html',
    description: 'Podkładki pod kubki'
  },
  {
    id: 'lustra',
    name: 'Lustra',
    category: 'lustra',
    price: 180,
    image: 'images/products/product12.jpeg',
    url: 'lustra.html',
    description: 'Lustra z żywicą'
  },
  {
    id: 'kieliszki',
    name: 'Kieliszki do wina',
    category: 'kieliszki',
    price: 90,
    image: 'images/products/lampki/lampki.jpeg',
    url: 'kieliszki.html',
    description: 'Kieliszki do wina z żywicą'
  },
  {
    id: 'kolekcje-sezonowe',
    name: 'Kolekcje sezonowe',
    category: 'sezonowe',
    price: 100,
    image: 'images/products/product13.jpeg',
    url: 'kolekcje-sezonowe.html',
    description: 'Kolekcje sezonowe'
  }
];

// Initialize products
function initializeProducts() {
  allProducts = [...productData];
  filteredProducts = [...allProducts];
  renderProducts();
}

// Search products
function searchProducts() {
  const searchTerm = document.getElementById('product-search').value.toLowerCase();
  
  // Only search if we're on shop page and have products to search
  if (document.querySelector('.shop-page')) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
      const productName = card.querySelector('h3').textContent.toLowerCase();
      const productImage = card.querySelector('img').alt.toLowerCase();
      
      if (searchTerm === '' || productName.includes(searchTerm) || productImage.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  } else {
    // Original search for homepage
    filterProducts();
    
    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
    }
    
    renderProducts();
  }
}

// Filter products
function filterProducts() {
  const categoryFilter = document.getElementById('category-filter').value;
  const priceFilter = document.getElementById('price-filter').value;
  
  filteredProducts = allProducts.filter(product => {
    let matchesCategory = !categoryFilter || product.category === categoryFilter;
    
    let matchesPrice = true;
    if (priceFilter) {
      const [min, max] = priceFilter.split('-').map(p => p === '+' ? Infinity : parseInt(p));
      matchesPrice = product.price >= min && (max === undefined || product.price <= max);
    }
    
    return matchesCategory && matchesPrice;
  });
  
  renderProducts();
}

// Sort products
function sortProducts() {
  const sortBy = document.getElementById('sort-filter').value;
  
  switch(sortBy) {
    case 'name-asc':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    default:
      // Keep original order
      break;
  }
  
  renderProducts();
}

// Clear all filters
function clearFilters() {
  document.getElementById('product-search').value = '';
  document.getElementById('category-filter').value = '';
  document.getElementById('price-filter').value = '';
  document.getElementById('sort-filter').value = 'default';
  
  filteredProducts = [...allProducts];
  renderProducts();
}

// Render products to the grid
function renderProducts() {
  const productsGrid = document.querySelector('.products-grid');
  if (!productsGrid) return;
  
  productsGrid.innerHTML = filteredProducts.map(product => `
    <a class="product-card" href="${product.url}" aria-label="${product.name}">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name} MDart" loading="lazy">
        <div class="product-overlay">
          <span class="btn btn-primary">Zobacz produkty</span>
        </div>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-price">${product.price} zł</p>
      </div>
    </a>
  `).join('');
  
  // Update results count
  updateResultsCount();
}

// Update results count
function updateResultsCount() {
  let resultsInfo = document.getElementById('results-info');
  if (!resultsInfo) {
    resultsInfo = document.createElement('div');
    resultsInfo.id = 'results-info';
    resultsInfo.className = 'results-info';
    document.querySelector('.search-filter-section').appendChild(resultsInfo);
  }
  
  const total = allProducts.length;
  const filtered = filteredProducts.length;
  
  if (filtered === total) {
    resultsInfo.textContent = `Znaleziono ${total} produktów`;
  } else {
    resultsInfo.textContent = `Znaleziono ${filtered} z ${total} produktów`;
  }
}

// Initialize search functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Only initialize products on homepage, not on shop page, patery page, or product pages
  if (document.querySelector('.products-grid') && !document.querySelector('.shop-page') && !document.querySelector('.patery-page') && !document.querySelector('.product-page')) {
    initializeProducts();
  }
  
  // Add search input event listener only for shop page
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', searchProducts);
  }
  
  // Homepage search functionality
  const homepageSearchInput = document.getElementById('homepage-product-search');
  if (homepageSearchInput) {
    homepageSearchInput.addEventListener('input', searchProductsHomepage);
  }
});

// Homepage search function
function searchProductsHomepage() {
  const searchTerm = document.getElementById('homepage-product-search').value.toLowerCase();
  const resultsContainer = document.getElementById('homepage-search-results');
  
  if (searchTerm.length < 2) {
    resultsContainer.style.display = 'none';
    return;
  }
  
  // Special case for "patera" - show all patery without prices
  if (searchTerm.includes('patera') || searchTerm.includes('pater')) {
    const pateryProducts = [
      { name: 'Patera fioletowa trzypiętrowa', description: 'Elegancka patera w odcieniach fioletu', image: 'images/products/patera1/product74.jpeg', url: 'patera-fioletowa.html' },
      { name: 'Patera biała klasyczna', description: 'Klasyczna biała patera z delikatnymi wzorami', image: 'images/products/pateraczarna/product97.jpeg', url: 'patera-biala.html' },
      { name: 'Patera morska', description: 'Morska patera w odcieniach niebieskiego', image: 'images/products/onas/1.jpeg', url: 'patera-niebieska.html' },
      { name: 'Patera różowa romantyczna', description: 'Romantyczna patera w kolorze różu', image: 'images/products/onas/2.jpeg', url: 'patera-rozowa.html' },
      { name: 'Patera marmurowa luksusowa', description: 'Luksusowa patera z efektem marmuru', image: 'images/products/onas/3.jpeg', url: 'patera-marmurowa.html' },
      { name: 'Patera złota elegancka', description: 'Elegancka patera ze złotymi akcentami', image: 'images/products/onas/4.jpeg', url: 'patera-zlota.html' },
      { name: '✨ Stwórz swoją paterę', description: 'Unikatowa patera według Twojego pomysłu', image: 'images/products/onas/5.jpeg', url: 'stwórz-swoją-paterę.html', special: true }
    ];
    
    resultsContainer.innerHTML = `
      <h4>Nasze patery:</h4>
      <div class="search-results-grid">
        ${pateryProducts.map(product => `
          <a href="${product.url}" class="search-result-item ${product.special ? 'special-item' : ''}">
            <img src="${product.image}" alt="${product.name}">
            <div class="search-result-info">
              <h5>${product.name}</h5>
              <p>${product.description}</p>
              <span class="search-result-note">${product.special ? 'Kliknij i stwórz' : 'Zobacz szczegóły i cenę'}</span>
            </div>
          </a>
        `).join('')}
      </div>
    `;
    resultsContainer.style.display = 'block';
    return;
  }
  
  // Regular search for other terms
  const matchingProducts = productData.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
  
  if (matchingProducts.length > 0) {
    resultsContainer.innerHTML = `
      <h4>Znalezione produkty (${matchingProducts.length}):</h4>
      <div class="search-results-grid">
        ${matchingProducts.map(product => `
          <a href="${product.url}" class="search-result-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="search-result-info">
              <h5>${product.name}</h5>
              <p>${product.description}</p>
              <span class="search-result-price">${product.price} zł</span>
            </div>
          </a>
        `).join('')}
      </div>
    `;
    resultsContainer.style.display = 'block';
  } else {
    resultsContainer.innerHTML = '<p>Nie znaleziono produktów pasujących do wyszukiwanej frazy.</p>';
    resultsContainer.style.display = 'block';
  }
}

// Stripe Payment Integration
let stripe;
let elements;

// Initialize Stripe (you'll need to replace with your actual publishable key)
function initializeStripe() {
  if (typeof Stripe !== 'undefined') {
    stripe = Stripe('pk_test_your_publishable_key_here'); // Replace with your actual key
    return true;
  }
  return false;
}

// Stripe payment initiation
function initiateStripePayment() {
  if (!initializeStripe()) {
    alert('System płatności nie jest dostępny. Skontaktuj się z nami telefonicznie.');
    return;
  }
  
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  if (cart.length === 0) {
    alert('Koszyk jest pusty!');
    return;
  }
  
  // Calculate total
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Create checkout session (this would normally be done on your server)
  stripe.redirectToCheckout({
    lineItems: cart.map(item => ({
      price_data: {
        currency: 'pln',
        product_data: {
          name: item.name,
          description: `Kolor: ${item.color}, Pojemność: ${item.capacity}`,
        },
        unit_amount: item.price * 100, // Convert to grosze
      },
      quantity: item.quantity,
    })),
    mode: 'payment',
    successUrl: `${window.location.origin}/success.html`,
    cancelUrl: `${window.location.origin}/cart.html`,
    customerEmail: 'customer@example.com', // You can get this from a form
  }).then(function (result) {
    if (result.error) {
      alert(result.error.message);
    }
  });
}

// Enhanced cart loading with Stripe button
function loadCartWithStripe() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const cartItems = document.getElementById('cart-items');
  const itemsCount = document.getElementById('items-count');
  const totalPrice = document.getElementById('total-price');
  const finalPrice = document.getElementById('final-price');
  const cartCount = document.getElementById('cart-count');
  const stripeBtn = document.getElementById('stripe-checkout-btn');
  
  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <h3>Twój koszyk jest pusty</h3>
        <p>Dodaj produkty z naszego sklepu</p>
        <a href="shop.html" class="btn btn-primary">Przejdź do sklepu</a>
      </div>
    `;
    itemsCount.textContent = '0';
    totalPrice.textContent = '0 zł';
    finalPrice.textContent = '0 zł';
    cartCount.textContent = '0';
    if (stripeBtn) stripeBtn.style.display = 'none';
    return;
  }
  
  let total = 0;
  let count = 0;
  
  cartItems.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    count += item.quantity;
    
    return `
      <div class="cart-item">
        <div class="item-image">
          <img src="images/products/product7.jpg" alt="${item.name}">
        </div>
        <div class="item-details">
          <h3>${item.name}</h3>
          <p class="item-variant">Kolor: ${item.color}, Pojemność: ${item.capacity}</p>
          <div class="item-controls">
            <button onclick="updateQuantity(${index}, -1)">-</button>
            <span class="quantity">${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)">+</button>
          </div>
        </div>
        <div class="item-price">
          <span class="price">${itemTotal} zł</span>
          <button class="remove-btn" onclick="removeItem(${index})">🗑️</button>
        </div>
      </div>
    `;
  }).join('');
  
  itemsCount.textContent = count;
  totalPrice.textContent = total + ' zł';
  finalPrice.textContent = total + ' zł';
  cartCount.textContent = count;
  
  // Show Stripe button if cart has items
  if (stripeBtn) {
    stripeBtn.style.display = 'inline-flex';
  }
}

// Wishlist functionality
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(product) {
  if (!wishlist.find(item => item.id === product.id)) {
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    showNotification('Dodano do listy życzeń!');
  }
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter(item => item.id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function updateWishlistUI() {
  const wishlistCount = document.getElementById('wishlist-count');
  if (wishlistCount) {
    wishlistCount.textContent = wishlist.length;
  }
  const wishlistCount2 = document.getElementById('wishlistCount');
  if (wishlistCount2) {
    wishlistCount2.textContent = wishlist.length;
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--accent);
    color: var(--brown-dark);
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;
document.head.appendChild(style);




