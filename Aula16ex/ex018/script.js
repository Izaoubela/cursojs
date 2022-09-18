let todososnumeros = []
let analiseDosNumeros = document.getElementById('analisedosnumeros')
let maiorNumero = 0
let menorNumero = 0
let somaDosNumeros = 0
let mediaDosNumero = 0
let numerodigitado = 0

function adicionarnumero() {
    numerodigitado = Number(document.getElementById('numeroinserido').value)
    let areacomnumeros = document.getElementById('mostrarnumero')
    if (verificarNumero(numerodigitado) || verificarNumeroNaLista(numerodigitado)) {
        alert('Número Inválido')
    } else {
        todososnumeros.push(numerodigitado)
        areacomnumeros.innerHTML = ''   
        // for (let volta = 0; volta < todososnumeros.length; volta++) {
        //     areacomnumeros.innerHTML += `Numero ${todososnumeros[volta]} adicionado \n`
        // }
        todososnumeros.forEach(numero => {
            areacomnumeros.innerHTML += `Numero ${numero} adicionado \n`
        })
    }
}

function verificarNumero(numero){
    if (numero <=0 || numero >= 100) {
        return true
    } else {
        return false
    }
}

function verificarNumeroNaLista(numero) {
    if (todososnumeros.indexOf(numero) != -1){
        return true
    } else {
        return false
    }
}

function pegarMaiorNumeroNoArray(lista) {
    lista.sort()
    maiorNumero = lista[lista.length - 1]
}

function pegarMenorNumeroNoArray (lista) {
    lista.sort()
    menorNumero = lista[0]
}

function somar() {
    for (posicao in todososnumeros) {
        somaDosNumeros = somaDosNumeros + todososnumeros[posicao] 
    }
    return somaDosNumeros
}

function media() {
    mediaDosNumero = somaDosNumeros / todososnumeros.length
    return mediaDosNumero
}

function analisar() {
    if (numerodigitado <= 0) {
        alert('Digite um número válido!')
    } else {
        analiseDosNumeros.innerHTML = ''
        analiseDosNumeros.innerHTML += `<p> Ao todo temos ${todososnumeros.length} números adicionados. </p>`
        pegarMaiorNumeroNoArray(todososnumeros)
        analiseDosNumeros.innerHTML += `<p> O maior número é o ${maiorNumero}.</p>`
        pegarMenorNumeroNoArray(todososnumeros)
        analiseDosNumeros.innerHTML += `<p> O menor número é o ${menorNumero}.</p>`
        analiseDosNumeros.innerHTML += `<p> A soma dos valores é ${somar()}.</p>`
        analiseDosNumeros.innerHTML += `<p> A média dos valores é ${media()}.</p>`
    }
    
}

