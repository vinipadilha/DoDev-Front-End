document.addEventListener("DOMContentLoaded", function () {
    // Espera até que o DOM esteja completamente carregado para executar o código

    // Seleciona a imagem principal dentro da div com a classe "mainImg"
    const mainImage = document.querySelector(".mainImg img");

    // Seleciona todas as imagens dentro da div com a classe "othersImg"
    const thumbnails = document.querySelectorAll(".othersImg img");

    // Para cada miniatura (thumbnail), adiciona um evento de clique
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            // Quando uma miniatura for clicada, atualiza o src (caminho da imagem)
            // e o alt (texto alternativo) da imagem principal para corresponder à miniatura clicada
            mainImage.src = this.src;
            mainImage.alt = this.alt;
        });
    });
});
