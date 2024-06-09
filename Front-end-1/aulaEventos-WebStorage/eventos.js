
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

document.getElementById("inputText").addEventListener()



