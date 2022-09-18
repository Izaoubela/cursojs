function gerar() {
    let numb = document.getElementById('digito')
    let tabuada = document.getElementById('tabuada')

    if (numb.value == 0) {
        window.alert('[ERRO] Coloque um número para gerar a tabuada')
    } else {
        let multiple = Number(numb.value)
        tabuada.innerHTML = 'Multiplicando: <br>'

        for (let volta = 1; volta <= 10; volta++) {
            let result = volta * multiple
            tabuada.innerHTML += `${multiple} X ${volta} = ${result} <br>`
        }
            
    }

}
