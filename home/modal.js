const modal = document.querySelector('.modalContainer');

function openModal() {
    modal.classList.add('active');
    updateCartModal(); // Atualiza o modal sempre que for aberto
}

function closeModal() {
    modal.classList.remove('active');
}





document.getElementById('addToCart').addEventListener('click', function() {
    const quantity = document.getElementById('quantity').value;
    const size = document.getElementById('size').value;
    const productTitle = document.querySelector('.productTitle h3').innerText;
    const productPrice = document.querySelector('.productTitle span').innerText;
    
    const cartItem = {
        title: productTitle,
        price: productPrice,
        quantity: quantity,
        size: size
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Produto adicionado ao carrinho!');
    updateCartModal();
});

function updateCartModal() {
    const modalBody = document.querySelector('.modalBody');
    modalBody.innerHTML = ''; // Limpa o conteúdo do modal

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        modalBody.innerHTML = '<p>Seu carrinho está vazio.</p>';
        return;
    }

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cartItem');

        cartItemDiv.innerHTML = `
            <h4>${item.title}</h4>
            <p>Preço: ${item.price}</p>
            <p>Quantidade: ${item.quantity}</p>
            <p>Tamanho: ${item.size}</p>
            <button onclick="removeFromCart('${item.title}', '${item.size}')">Remover</button>
        `;

        modalBody.appendChild(cartItemDiv);
    });
}

function removeFromCart(title, size) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => !(item.title === title && item.size === size));
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartModal();
}

document.addEventListener('DOMContentLoaded', updateCartModal);



