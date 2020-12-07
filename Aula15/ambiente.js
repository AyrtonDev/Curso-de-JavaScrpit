let num = [5, 8, 4]

num[3] = 6
num.push(9)

console.log(`Nosso vetor é ${num}`)
console.log(`O tamanho do vetor é ${num.length}`)
console.log(`Em ordem crescente o vetor fica ${num.sort()}`)

let pos =  num.indexOf(4)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}