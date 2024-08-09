// products.js
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Gray Coding T-shirt', price: 5.00, image: '1.jpeg', description: 'A sleek gray T-shirt featuring a stylish coding design. Perfect for programmers who love to code in comfort.' },
        { id: 2, name: 'Sale On Coding T-shirt', price: 5.00, image: '2.jpeg', description: 'Get this limited-edition T-shirt on sale! A must-have for developers who want to showcase their passion for coding.' },
        { id: 3, name: 'Dark Gray Coding T-shirt', price: 5.00, image: '3.jpeg', description: 'A dark gray T-shirt with a bold coding graphic. Ideal for coders who like to keep it cool and professional.' },
        { id: 4, name: 'Code Hard T-shirt', price: 5.00, image: '4.jpeg', description: 'This T-shirt reminds you to "Code Hard" with its inspiring text. A great addition to any developer’s wardrobe.' },
        { id: 5, name: 'Eat Sleep Code Repeat T-shirt', price: 5.00, image: '5.jpeg', description: 'The perfect mantra for any programmer! This T-shirt is a tribute to the coder’s life: Eat, Sleep, Code, Repeat.' },
        { id: 6, name: 'Debug Mode On T-shirt', price: 5.00, image: '6.jpeg', description: 'Switch to debug mode with this cool T-shirt. Ideal for developers who spend their days squashing bugs and writing code.' }
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
