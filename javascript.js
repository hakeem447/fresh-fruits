let cart = [];
let total = 0;

// கார்ட் விண்டோவை திறக்க/மூட
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

// கார்ட்டில் பொருட்களை சேர்க்க
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total += price;
    updateCartUI();
}

// கார்ட் திரையை புதுப்பிக்க
function updateCartUI() {
    // கார்ட் கவுண்டர் அப்டேட்
    document.getElementById('cart-count').innerText = cart.length;
    
    // பொருட்கள் லிஸ்ட் அப்டேட்
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    cart.forEach((item) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <strong>Rs. ${item.price}</strong>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
    
    // மொத்த தொகை அப்டேட்
    document.getElementById('cart-total').innerText = total;
}

// ஆர்டர் கன்ஃபார்ம் செய்ய
function checkout() {
    if(cart.length === 0) {
        alert("உங்களது கார்ட் காலியாக உள்ளது! ஏதேனும் பழங்களைச் சேர்க்கவும்.");
        return;
    }
    alert(`வெற்றி! உங்களது பழங்கள் ஆர்டர் ஏற்றுக்கொள்ளப்பட்டது.\nமொத்த தொகை: Rs. ${total}\nபொருட்கள் டெலிவரி செய்யும் போது பணத்தை செலுத்தவும் (COD).`);
    cart = [];
    total = 0;
    updateCartUI();
    toggleCart();
}
