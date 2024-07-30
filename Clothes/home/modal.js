function openModal() {
    document.querySelector('.modalContainer').classList.remove('hidden');
}

function closeModal() {
    document.querySelector('.modalContainer').classList.add('hidden');
}

// Adiciona event listeners aos botões
document.querySelector('.cartLink').addEventListener('click', openModal);
document.querySelector('.btn-left').addEventListener('click', closeModal);



document.getElementById('addToCart').addEventListener('click', function() {
    // Obter informações do produto
    const productTitle = document.querySelector('.productTitle h3').innerText;
    const productPrice = document.querySelector('.productTitle span').innerText;
    const productQuantity = document.getElementById('quantity').value;
    const productSize = document.getElementById('size').value;

    const product = {
        title: productTitle,
        price: productPrice,
        quantity: productQuantity,
        size: productSize
    };

    // Recuperar o carrinho do localStorage ou inicializar um novo array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Adicionar o novo produto ao carrinho
    cart.push(product);

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Atualizar o modal do carrinho
    updateCartModal();
});

function updateCartModal() {
    const cartModalBody = document.querySelector('.modalBody');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Limpar o conteúdo atual do modal
    cartModalBody.innerHTML = '';

    // Adicionar os itens do carrinho ao modal
    cart.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-item');
        productElement.innerHTML = `
            <p>${product.title} - ${product.size} - ${product.quantity} x ${product.price}</p>
            <button class="remove-item" data-index="${index}">Remover</button>
        `;
        cartModalBody.appendChild(productElement);
    });

    // Adicionar evento de clique aos botões de remover item
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            removeFromCart(index);
        });
    });
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartModal();
}

// Inicializar o modal do carrinho com os itens do localStorage
updateCartModal();

