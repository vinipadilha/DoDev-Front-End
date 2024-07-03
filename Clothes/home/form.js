document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        const userInfo = {
            name: name,
            email: email,
            telefone: telefone
        };

        const apiUrl = 'https://apigenerator.dronahq.com/api/6_NV-uZ3/data';

        // Faz a requisição fetch para enviar os dados para a API
        fetch(apiUrl, {
            method: 'POST', // Método HTTP utilizado
            headers: {
                'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
                // 'Authorization': 'Bearer YOUR_API_KEY' // Adicione esta linha se sua API requerer autenticação
            },
            // Converte o objeto userInfo para uma string JSON
            body: JSON.stringify(userInfo)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }) // Converte a resposta para JSON
        .then(data => {
            console.log('Resposta da API:', data); // Log detalhado da resposta da API
            // Verifica se a resposta indica sucesso
            if (data) {
                alert('Dados enviados com sucesso!'); // Alerta de sucesso
            } else {
                alert('Erro ao enviar dados: ' + (data.message || 'Erro desconhecido')); // Alerta de erro com a mensagem da API
            }
        })
        .catch(error => {
            // Captura e exibe erros que ocorrem durante a requisição
            console.error('Erro:', error);
            alert('Erro ao enviar dados: ' + error.message); // Alerta de erro com a mensagem do erro
        });
    });
});
