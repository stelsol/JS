let num = [5,8,2,9]
num.push(7)
num.sort() // Ordena nosso vetor em ordem crescente
let pos = num.indexOf(4)
if(pos == -1){
    console.log('O valor não foi encontrado ')

}else{
console.log(`o valor 9 está na posição ${pos}`)
}
//num[4] = 10  adiciona o numero 10 na posição que está declarada entre []
//num.push(8) -> adiciona um elemento ao vetor
//num.length -> diz quantos elementos temos no vetor
console.log(`Nosso vetor é o ${num}, e ele possue ${num.length} elementos`)
console.log(`o valor armzenado na posição 4 é ${num[4]}`)