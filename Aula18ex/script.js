const contatos = []
const nomeDigitado = document.getElementById('nomeDigitado')
const numeroDigitado = document.getElementById('numeroDigitado')
const lista = document.getElementById('lista')

function adicionar() {
    contatos.push({
        name: nomeDigitado.value,
        telefone: numeroDigitado.value
    })
    lista.innerHTML = ''

    contatos.forEach(contato => {
        lista.innerHTML += `<p>${contato.name} e ${contato.telefone} </p>`
    })

    nomeDigitado.value = ''
    numeroDigitado.value = ''
    nomeDigitado.focus()
   
}

// for (let contato = 0; contato < contatos.length; contato++)

