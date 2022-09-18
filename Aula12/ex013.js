var agora = new Date ()
var diaSem = agora.getDay ()

switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break  
}



/*
get.Day mostra os dias da semana, mas vai mostrar em número,
e o domingo começa no 0 e não no 1*/ 
