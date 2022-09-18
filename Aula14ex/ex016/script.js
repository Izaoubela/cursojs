function contar() {
    var valorDoInicio = Number(document.getElementById('firstnumber').value)
    var valorDoFim = Number(document.getElementById('lastnumber').value)
    var mostrar = document.getElementById('count')
    var valorDoPasso = Number(document.getElementById('passo').value)

    if (valorDoInicio == 0 || valorDoFim == 0 || valorDoPasso == 0) {
        window.alert('[ERRO]Preencha corretamente!')
    } else {
        if (valorDoPasso == 0) {
            valorDoPasso = 1
        }

        mostrar.innerHTML = ''
        var texto = ''

        if (valorDoInicio < valorDoFim) {
            for (var volta = valorDoInicio; volta <= valorDoFim; volta += valorDoPasso ){
                texto += `${volta} - `
            } 
        } else {
            for (var volta = valorDoInicio; volta >= valorDoFim; volta -= valorDoPasso ) {
                texto += `${volta} - `          
            }
        }

        mostrar.innerHTML = texto.substring(0,texto.length - 3)
 
        document.getElementById('firstnumber').value = ''
        document.getElementById('lastnumber').value = ''
        document.getElementById('passo').value = ''
    }
    
}


/* 
for (var i = 1 ; i < 10 ; i++)


--------- 
for (var i = 1 ; i < 10 ; i+=2)
(1 == 10 || (10 - 3) < 1)
(3 == 10 || (10 - 3) < 3)
(5 == 10 || (10 - 3) < 5)   
(7 == 10 || (10 - 3) < 7)
(9 == 10 || (10 - 3) < 9)
(indice == lastn || (lastn - step) < indice)

    /*if (pas = 0) {
        window.alert('Número inválido, será considera 1')
        pas = 1 
    } else {
        // soma o firstn com inicio , até < fim 
    }*/
    


        
