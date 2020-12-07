function verificar() {
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    autenticarAno(fano, ano)
}

function autenticarAno(fano,ano) {
    if (fano.value.lenght == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        autenticarIdade(fano, ano)
    }
}

function autenticarIdade(fano, ano) {
    var res = document.querySelector('#res')
    var fsex = document.getElementsByName('radsex')
    var idade = ano - fano.value
    var gen= ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gen = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebe-m.png')
        }else if (idade < 21) {
            img.setAttribute('src', 'jovem-m.png')
        }else if (idade < 50) {
            img.setAttribute('src', 'adulto-m.png')
        }else {
            img.setAttribute('src', 'idoso-m.png')
        }
    }else{
        gen = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebe-f.png')
        }else if (idade < 21) {
            img.setAttribute('src', 'jovem-f.png')
        }else if (idade < 50) {
            img.setAttribute('src', 'adulto-f.png')
        }else {
            img.setAttribute('src', 'idosa-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
    res.appendChild(img)
}