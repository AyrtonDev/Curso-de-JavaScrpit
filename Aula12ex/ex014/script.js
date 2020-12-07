function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    mudarImagem(hora,img)
}

function mudarImagem (h,i) {
    if (h >= 0 && h < 12) {
        i.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }else if (h >= 12 && h < 18) {
        i.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else{
        i.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
    return h,i
}