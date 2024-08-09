// products.js
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Gray T-shirt', price: 29.99, image: '/images/2.jpeg', description: 'Description of product 1.' },
        { id: 2, name: 'Sale On T-shirt', price: 49.99, image: '/images/6.jpeg', description: 'Description of product 2.' },
        { id: 3, name: 'Dark Gray T-shirt', price: 49.99, image: '/images/3.jpeg', description: 'Description of product 3.' },
        { id: 4, name: 'Product 4', price: 49.99, image: '/images/4.jpeg', description: 'Description of product 4.' },
        { id: 5, name: 'Product 5', price: 49.99, image: '/images/5.jpeg', description: 'Description of product 5.' },
        { id: 6, name: 'Product 6', price: 49.99, image: '/images/5.jpeg', description: 'Description of product 6.' }
    ];

    function setupAddToCartButtons() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-product-id');
                const product = products.find(p => p.id === parseInt(productId));
                if (product) {
                    console.log('Adding product to cart:', product);
                    window.addToCart(product); // Ensure addToCart is globally available
                    alert("product added to cart")
                } else {
                    console.log('Product not found:', productId);
                }
            });
        });
    }

    const productContainer = document.getElementById('productContainer');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4 mb-4';
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <a href="product_details.html?id=${product.id}" class="btn btn-primary">View Details</a>
                    <button class="btn btn-primary add-to-cart" data-product-id="${product.id}">Add To Cart</button>
                </div>
            </div>
        `;
        productContainer.appendChild(productCard);
    });

    setupAddToCartButtons(); // Call after adding products to the DOM
});
