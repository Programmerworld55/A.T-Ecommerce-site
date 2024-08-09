window.addToCart = function(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', function () {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');
    let total = 0;

    if (cartContainer) {
        cartItems.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item row';
            cartItemDiv.innerHTML = `
                <div class="col-md-4">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid">
                </div>
                <div class="col-md-8">
                    <h5>${item.name}</h5>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    <button class="btn btn-danger remove-btn" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartContainer.appendChild(cartItemDiv);
            total += item.price * item.quantity;
        });
        document.getElementById('cartTotal').textContent = total.toFixed(2);
    }

    // Event listener for removing items from the cart
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-btn')) {
            const itemId = e.target.getAttribute('data-id');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => item.id !== parseInt(itemId));
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.reload(); // Reload to update the cart display
        }
    });

    // Event listener for the checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            alert('Proceeding to checkout...');
            window.location.href = '/html_files/checkout.html'; // Redirect to the checkout page without clearing the cart
        });
    }
});
