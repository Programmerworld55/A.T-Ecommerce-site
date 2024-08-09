// product_details.js
document.addEventListener("DOMContentLoaded", function() {
    const productId = new URLSearchParams(window.location.search).get('id');
    const products = [
        { id: 1, name: 'Gray T-shirt', price: 29.99, image: '/images/2.jpeg', description: 'Description of product 1.' },
        { id: 2, name: 'Sale On T-shirt', price: 49.99, image: '/images/6.jpeg', description: 'Description of product 2.' },
        { id: 3, name: 'Dark Gray T-shirt', price: 49.99, image: '/images/3.jpeg', description: 'Description of product 3.' },
        { id: 4, name: 'Product 4', price: 49.99, image: '/images/4.jpeg', description: 'Description of product 4.' },
        { id: 5, name: 'Product 5', price: 49.99, image: '/images/5.jpeg', description: 'Description of product 5.' },
        { id: 6, name: 'Product 6', price: 49.99, image: '/images/5.jpeg', description: 'Description of product 6.' }
    ];

    const product = products.find(p => p.id == productId);

    if (product) {
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productPrice').textContent = `$${product.price}`;
        document.getElementById('productImage').src = product.image;

        document.getElementById('addToCartBtn').addEventListener('click', () => {
            console.log('Adding product to cart:', product);
            window.addToCart(product); // Ensure addToCart is globally available
            alert('Product added to cart!');
        });
    } else {
        console.error('Product not found!');
    }
});
