function contar(){
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var res = document.getElementById ('res')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        window.alert('[Erro] Dados incompletos!')
    } else {
        res.innerHTML = 'Contando: <br>' 
        let start1 = Number(start.value)
        let end1 = Number(end.value)
        let step1 = Number(step.value)

        if (step1 <= 0) {
            window.alert('Impossível contar, Passo será 1')
            step1 = 1
        }
        
        if (end1 >= start1){
            for (let count = start1; count <= end1; count += step1 ){
                res.innerHTML += ` ${count} `
            }
        } else {
            for (let count = start1; count >= end1; count -= step1 ){
                res.innerHTML += ` ${count} `
            }
        }
    }
}