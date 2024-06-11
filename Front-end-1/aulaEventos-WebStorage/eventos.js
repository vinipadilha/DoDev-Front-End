
function executar(event){
    console.log("Botão clicado")
    console.log(event)

}

document.getElementById('form',  ).addEventListener("submit", (e) =>{

    console.log(e)
    alert("Recebido")
})

const img = document.getElementById("ney")

img.addEventListener('mouseover', diminuiImagem)
img.addEventListener('mouseout', aumentaImagem)

function diminuiImagem(event){
    event.target.style.height = "20vh"
}

function aumentaImagem(event){
    event.target.style.height = "50vh"
}


function salvar(){
    window.sessionStorage.setItem('período', 'manhã')
}

function InputSave(text){
    window.sessionStorage.setItem('texto input', text)

}

document.getElementById("inputText").addEventListener("blur", (event) => {
    console.log(event.target.value) // faz aparecer no console o texto do input
    InputSave(event.target.value)
})

// setItem define valor e chave 
// getItem busca valor atraves da chave
// removeItem remove valor associado a chave 
// clear()



