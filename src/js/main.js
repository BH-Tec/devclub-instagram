let imagem = document.querySelector('.troca-imagem')

function trocaImagem() {
    imagem.style.opacity = imagem.style.opacity == 0 ? 1 : 0
}

setInterval(trocaImagem, 3000)