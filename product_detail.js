// product_details.js
document.addEventListener("DOMContentLoaded", function() {
    const productId = new URLSearchParams(window.location.search).get('id');
    const products = [
        { id: 1, name: 'Gray Coding T-shirt', price: 5.00, image: '1.jpeg', description: 'A sleek gray T-shirt featuring a stylish coding design. Perfect for programmers who love to code in comfort.' },
        { id: 2, name: 'Sale On Coding T-shirt', price: 5.00, image: '2.jpeg', description: 'Get this limited-edition T-shirt on sale! A must-have for developers who want to showcase their passion for coding.' },
        { id: 3, name: 'Dark Gray Coding T-shirt', price: 5.00, image: '3.jpeg', description: 'A dark gray T-shirt with a bold coding graphic. Ideal for coders who like to keep it cool and professional.' },
        { id: 4, name: 'Code Hard T-shirt', price: 5.00, image: '4.jpeg', description: 'This T-shirt reminds you to "Code Hard" with its inspiring text. A great addition to any developer’s wardrobe.' },
        { id: 5, name: 'Eat Sleep Code Repeat T-shirt', price: 5.00, image: '5.jpeg', description: 'The perfect mantra for any programmer! This T-shirt is a tribute to the coder’s life: Eat, Sleep, Code, Repeat.' },
        { id: 6, name: 'Debug Mode On T-shirt', price: 5.00, image: '6.jpeg', description: 'Switch to debug mode with this cool T-shirt. Ideal for developers who spend their days squashing bugs and writing code.' }
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
