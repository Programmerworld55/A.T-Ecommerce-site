document.addEventListener('DOMContentLoaded', function () {
    // Retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartItems');
    let total = 0;

    // Display cart items on the checkout page
    if (cartContainer) {
        cartItems.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cart-item mb-3';
            cartItemDiv.innerHTML = `
                <p>${item.name} (Quantity: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</p>
            `;
            cartContainer.appendChild(cartItemDiv);
            total += item.price * item.quantity;
        });

        // Update the total amount on the checkout page
        const cartTotalElement = document.getElementById('cartTotal');
        if (cartTotalElement) {
            cartTotalElement.textContent = total.toFixed(2);
        } else {
            console.error("Element with ID 'cartTotal' not found.");
        }
    } else {
        console.error("Element with ID 'cartItems' not found.");
    }

    // Handle the form submission for checkout
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Confirm the order and remove items from the cart
            alert('Purchase completed successfully!');
            localStorage.removeItem('cart');  // Clear the cart AFTER the order is placed
            window.location.href = 'index.html';  // Redirect to the home page
        });
    } else {
        console.error("Element with ID 'checkoutForm' not found.");
    }
});
