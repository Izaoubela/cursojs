const contatos = []

const lista = document.getElementById('lista')
const text = document.getElementById('text')

function adicionar() {
    contatos.push(
        { 
            name: text.value, 
            peso: 80, 
            engordar: (kilo, posicao) => { 
                return contatos[posicao].peso += kilo
            } 
        }
    )
    
    contatos.forEach((volta, indice) => {
        volta.engordar(1, indice)
        //lista.innerHTML = ''
        lista.innerHTML += `<p>${volta.name} pesa ${volta.peso}</p>`
    })
}

function engordar() {
    contatos[0].engordar(5, 0)
    lista.innerHTML += `<p>${contatos[0].name} pesa ${contatos[0].peso}</p>`
}
