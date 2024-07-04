const form = document.getElementById('user-form');

// Adiciona um evento de escuta para o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    // Cria um objeto com os dados do usuário
    const userInfo = {
        name: name,
        email: email,
        telefone: telefone
    };

    // Armazena os dados no localStorage como uma string JSON
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Exibe uma mensagem de sucesso (opcional)
    alert('Dados armazenados localmente com sucesso!');
});
