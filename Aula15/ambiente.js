let num = [5, 2, 8, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let posição = num.indexOf(8)

if (posição == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${posição}`)
}

