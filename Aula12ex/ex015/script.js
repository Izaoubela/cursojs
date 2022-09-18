function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Confira os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.getAttribute ('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute ('src','menino.png')
            } else if ( idade < 21) {
                //Adolescente
                img.setAttribute ('src','meninojovem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute ('src','adultohomem.png')
            } else {
                //Idoso
                img.setAttribute ('src','idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute ('src', 'menina.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute ('src','meninajovem.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute ('src','adultomulher.png')
            } else {
                //idoso
                img.setAttribute ('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
    }
}