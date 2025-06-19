const collections = [
    { key: 'GENTS_SHORT_KURTA', label: "Gents Short Kurta" },
    { key: 'DESIGNER_BLOUSE', label: "Designer Blouse" },
    { key: 'WOMEN_SHORT_TOPS', label: "Women Short Tops" },
    { key: 'PERSONALISED_CUSHION', label: "Personalised Cushion" },
    { key: 'DESIGNER_SLING_BAG', label: "Designer Sling Bag" }
];

const products = {
    GENTS_SHORT_KURTA: [
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-02.png', code: 'KURTA-02' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-03.png', code: 'KURTA-03' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-04.png', code: 'KURTA-04' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-05.png', code: 'KURTA-05' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-06.png', code: 'KURTA-06' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-07.png', code: 'KURTA-07' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-08.png', code: 'KURTA-08' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-09.png', code: 'KURTA-09' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-10.png', code: 'KURTA-10' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-11.png', code: 'KURTA-11' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-12.png', code: 'KURTA-12' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-13.png', code: 'KURTA-13' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-14.png', code: 'KURTA-14' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-15.png', code: 'KURTA-15' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-16.png', code: 'KURTA-16' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-17.png', code: 'KURTA-17' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-18.png', code: 'KURTA-18' },
        { img: 'assets/GENTS_SHORT_KURTA/khadi Gents Kurtha-19.png', code: 'KURTA-19' }
    ],
    DESIGNER_BLOUSE: [
        { img: 'assets/DESIGNER_BLOUSE/DESIGNER BLOUSE-02.png', code: 'BLOUSE-02' },
        { img: 'assets/DESIGNER_BLOUSE/DESIGNER BLOUSE-03.png', code: 'BLOUSE-03' },
        { img: 'assets/DESIGNER_BLOUSE/DESIGNER BLOUSE-04.png', code: 'BLOUSE-04' },
        { img: 'assets/DESIGNER_BLOUSE/DESIGNER BLOUSE-05.png', code: 'BLOUSE-05' },
        { img: 'assets/DESIGNER_BLOUSE/DESIGNER BLOUSE-06.png', code: 'BLOUSE-06' },
        { img: 'assets/DESIGNER_BLOUSE/DESIGNER BLOUSE-07.png', code: 'BLOUSE-07' },
        { img: 'assets/DESIGNER_BLOUSE/DESIGNER BLOUSE-08.png', code: 'BLOUSE-08' },
        { img: 'assets/DESIGNER_BLOUSE/DESIGNER BLOUSE-13.png', code: 'BLOUSE-13' }
    ],
    WOMEN_SHORT_TOPS: [],
    PERSONALISED_CUSHION: [
        { img: 'assets/PERSONALISED_CUSHION/CUSHION-02.png', code: 'CUSHION-02' },
        { img: 'assets/PERSONALISED_CUSHION/CUSHION-03.png', code: 'CUSHION-03' },
        { img: 'assets/PERSONALISED_CUSHION/CUSHION-04.png', code: 'CUSHION-04' },
        { img: 'assets/PERSONALISED_CUSHION/CUSHION-05.png', code: 'CUSHION-05' },
        { img: 'assets/PERSONALISED_CUSHION/CUSHION-06.png', code: 'CUSHION-06' },
        { img: 'assets/PERSONALISED_CUSHION/CUSHION-07.png', code: 'CUSHION-07' },
        { img: 'assets/PERSONALISED_CUSHION/CUSHION-08.png', code: 'CUSHION-08' },
        { img: 'assets/PERSONALISED_CUSHION/CUSHION-09.png', code: 'CUSHION-09' },
        { img: 'assets/PERSONALISED_CUSHION/CUSHION-10.png', code: 'CUSHION-10' }
    ],
    DESIGNER_SLING_BAG: [
        { img:'assets/designer slingbag/Untitled-1-02 - Copy.png', code:'BAG-01'}
    ]
};

// Global variables
let cart = [];
let cartCount = 0;
let cartVisible = false;

// Product price mapping
const productPrices = {
    'KURTA': 899,
    'BLOUSE': 699,
    'CUSHION': 499,
    'BAG': 599
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    renderCollections();
    renderProducts(collections[0].key);
    setupCartToggle();
    updateCartCount();
});

// Render product collections
function renderCollections() {
    const list = document.querySelector('.collection-list');
    list.innerHTML = '';
    
    const imageMap = {
        'GENTS_SHORT_KURTA': 'kurta.jpg',
        'DESIGNER_BLOUSE': 'blouse.png',
        'PERSONALISED_CUSHION': 'cushion.png',
        'DESIGNER_SLING_BAG': 'bag.png',
        'WOMEN_SHORT_TOPS': 'top.png'
    };
    
    collections.forEach((col, idx) => {
        if (!imageMap[col.key]) return;
        
        const div = document.createElement('div');
        div.className = `collection-item ${idx === 0 ? 'selected' : ''}`;
        div.dataset.collection = col.key;
        div.innerHTML = `
            <img src="assets/Collection_images/${imageMap[col.key]}" alt="${col.label}">
            <span>${col.label}</span>
        `;
        list.appendChild(div);
    });

    // Collection selection event
    list.addEventListener('click', (e) => {
        const item = e.target.closest('.collection-item');
        if (!item || item.classList.contains('selected')) return;
        
        document.querySelector('.collection-item.selected').classList.remove('selected');
        item.classList.add('selected');
        renderProducts(item.dataset.collection);
    });
}

// Render products for a collection
function renderProducts(collection) {
    const grid = document.getElementById('product-grid');
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        grid.innerHTML = '';
        
        (products[collection] || []).forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card vani';
            card.innerHTML = `
                <div class="product-card-img-container">
                    <img src="${product.img}" alt="${product.code}" loading="lazy">
                </div>
                <span class="product-label">${product.code}</span>
                <div class="quantity-controls">
                    <button class="quantity-btn minus">-</button>
                    <span class="quantity-display">0</span>
                    <button class="quantity-btn plus">+</button>
                </div>
                <button class="add-to-cart" disabled>Add to Cart</button>
            `;
            grid.appendChild(card);

            setupProductCard(card, product, collection);
        });

        // Fade in animation
        setTimeout(() => {
            grid.style.opacity = '1';
            grid.style.transform = 'translateY(0)';
            grid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        }, 50);
    }, 300);
}

// Setup product card interactions
function setupProductCard(card, product, collection) {
    const productState = {
        quantity: 0
    };
    
    const minusBtn = card.querySelector('.minus');
    const plusBtn = card.querySelector('.plus');
    const quantityDisplay = card.querySelector('.quantity-display');
    const addToCartBtn = card.querySelector('.add-to-cart');

    // Check if product exists in cart
    const existingItem = cart.find(item => 
        item.code === product.code && 
        item.collection === collection
    );
    
    if (existingItem) {
        productState.quantity = existingItem.quantity;
        quantityDisplay.textContent = existingItem.quantity;
        updateAddToCartButton();
    }

    // Event listeners
    minusBtn.addEventListener('click', () => {
        if (productState.quantity > 0) {
            productState.quantity--;
            quantityDisplay.textContent = productState.quantity;
            updateAddToCartButton();
            updateCart(product, collection, productState);
        }
    });

    plusBtn.addEventListener('click', () => {
        productState.quantity++;
        quantityDisplay.textContent = productState.quantity;
        updateAddToCartButton();
        updateCart(product, collection, productState);
    });

    addToCartBtn.addEventListener('click', () => {
        if (productState.quantity > 0) {
            addToCart(product, collection, productState);
        }
    });

    function updateAddToCartButton() {
        addToCartBtn.disabled = !(productState.quantity > 0);
    }
}

// Cart management functions
function addToCart(product, collection, productState) {
    const existingItem = cart.find(item => 
        item.code === product.code && 
        item.collection === collection
    );

    if (existingItem) {
        existingItem.quantity = productState.quantity;
    } else {
        cart.push({
            ...product,
            collection,
            quantity: productState.quantity,
            price: getProductPrice(product.code)
        });
    }

    updateCartCount();
    showFeedback(`${productState.quantity} ${product.code} added to cart`);
    renderCartItems();
}

function updateCart(product, collection, productState) {
    const existingItem = cart.find(item => 
        item.code === product.code && 
        item.collection === collection
    );

    if (existingItem) {
        if (productState.quantity === 0) {
            removeFromCart(product.code, collection);
        } else {
            existingItem.quantity = productState.quantity;
            updateCartCount();
            renderCartItems();
        }
    }
}

function removeFromCart(code, collection) {
    const index = cart.findIndex(item => 
        item.code === code && 
        item.collection === collection
    );

    if (index != -1) {
        cartCount -= cart[index].quantity;
        cart.splice(index, 1);
        updateCartCount();
        renderCartItems();
    }
}

function renderCartItems() {
    const dropdown = document.querySelector('.cart-dropdown');
    if (!dropdown) return;
    
    dropdown.innerHTML = `
        <h4>Your Cart (${cartCount} items)</h4>
        ${cart.length > 0 ? cart.map(item => `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.code}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.code}</div>
                    <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn minus" data-code="${item.code}" data-collection="${item.collection}">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn plus" data-code="${item.code}" data-collection="${item.collection}">+</button>
                    </div>
                </div>
                <button class="remove-btn" data-code="${item.code}" data-collection="${item.collection}">×</button>
            </div>
        `).join('') : '<p>Your cart is empty</p>'}
        ${cart.length > 0 ? `
            <div class="cart-total">
                Total: ₹${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
            </div>
            <button class="checkout-btn">Proceed to Checkout</button>
        ` : ''}
    `;

    // Cart controls event listeners
    dropdown.querySelectorAll('.minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const { code, collection } = e.target.dataset;
            const item = cart.find(item => 
                item.code === code && 
                item.collection === collection
            );
            
            if (item && item.quantity > 1) {
                item.quantity--;
                cartCount--;
                updateCartCount();
                updateProductCard(code, collection, item.quantity);
                renderCartItems();
            } else if (item && item.quantity === 1) {
                removeFromCart(code, collection);
            }
        });
    });

    dropdown.querySelectorAll('.plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const { code, collection } = e.target.dataset;
            const item = cart.find(item => 
                item.code === code && 
                item.collection === collection
            );
            
            if (item) {
                item.quantity++;
                cartCount++;
                updateCartCount();
                updateProductCard(code, collection, item.quantity);
                renderCartItems();
            }
        });
    });

    dropdown.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const { code, collection } = e.target.dataset;
            removeFromCart(code, collection);
        });
    });

    if (cart.length > 0) {
        dropdown.querySelector('.checkout-btn').addEventListener('click', () => {
            window.location.href = 'https://khadi-board-transaction-trackerv1.s3.ap-south-1.amazonaws.com/Login/khadi_Login_User.html';
        });
    }
}

function updateProductCard(code, collection, quantity) {
    const currentCollection = document.querySelector('.collection-item.selected').dataset.collection;
    if (currentCollection === collection) {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach(card => {
            if (card.querySelector('.product-label').textContent === code) {
                const quantityDisplay = card.querySelector('.quantity-display');
                quantityDisplay.textContent = quantity;
            }
        });
    }
}

// Helper functions
function getProductPrice(code) {
    const type = code.split('-')[0];
    return productPrices[type] || 499;
}

function updateCartCount() {
    const countElement = document.querySelector('.cart-count');
    cartCount = cart.reduce((total,item) => total + item.quantity,0);
    if (countElement) {
        countElement.textContent = cartCount;
        countElement.style.display = cartCount === 0 ? 'none' : 'flex';
    }
}

function showFeedback(message) {
    const feedback = document.createElement('div');
    feedback.className = 'cart-feedback';
    feedback.textContent = message;
    feedback.style.position = 'fixed';
    feedback.style.bottom = '20px';
    feedback.style.right = '20px';
    feedback.style.backgroundColor = 'var(--primary-accent)';
    feedback.style.color = 'white';
    feedback.style.padding = '12px 24px';
    feedback.style.borderRadius = 'var(--radius)';
    feedback.style.zIndex = '1000';
    feedback.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    feedback.style.opacity = '1';
    feedback.style.transition = 'opacity 0.5s ease';
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => feedback.remove(), 500);
    }, 5000);
}

function setupCartToggle() {
    const cartToggle = document.createElement('button');
    cartToggle.className = 'cart-toggle';
    cartToggle.innerHTML = '🛒<span class="cart-count" style="display: none;">0</span>';
    cartToggle.addEventListener('click', toggleCart);
    document.body.appendChild(cartToggle);
    
    const cartDropdown = document.createElement('div');
    cartDropdown.className = 'cart-dropdown';
    document.body.appendChild(cartDropdown);
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.cart-toggle') && !e.target.closest('.cart-dropdown') && !e.target.closest('.minus')&& !e.target.closest('.plus')&& !e.target.closest('.remove-btn')) {
            cartVisible = false;
            cartDropdown.classList.remove('active');
        }
    });
}

function toggleCart() {
    cartVisible = !cartVisible;
    const dropdown = document.querySelector('.cart-dropdown');
    dropdown.classList.toggle('active', cartVisible);
    renderCartItems();
}
