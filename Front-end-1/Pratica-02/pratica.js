const form = document.getElementById("form")

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    const name = document.getElementById("name").value
    const address = document.getElementById("address").value
    const open = document.getElementById("open").value
    const close = document.getElementById("close").value

    console.log('Nome da loja:', name);
    console.log('Endereço:', address);
    console.log('Horário de abertura:', open);
    console.log('Horário de fechamento:', close);


})



