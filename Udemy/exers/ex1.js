// Seu desafio:
// 1. Use um laço `for`.
// 2. Use desestruturação para pegar nome e idade.
// 3. Mostre no console: "Nome: Ana, Idade: 25"

const pessoas = [
    ["Ana", 25], ["Carlos", 30], ["Beatriz", 22]
];

for(let i = 0; i < 1; i++){
    let [ nome, idade] = pessoas[i]
    console.log(`nome: ${nome} - idade:${idade}`)
}


/*
minha tentativa
const pessoas = [
    ["Ana", 25], ["Carlos", 30], ["Beatriz", 22]
];

for(let i = 2; i < pessoas.length; i++){
    let [ pessoa1, pessoa2,pessoa3] = pessoas // o array aqui está pondo em pessoa1 os nomes / em pessoa2 a idade e na 3 nada, por isso ta dando esses erros. e está aparecendo todas as informações 3 vezes inteira pois não colocamos o i
    console.log(`Nome: ${pessoa1[0]}, Idade: ${pessoa1[1]}`)
}
    
//!  nosso erro foi querer usar o for e a desestruturação com a lógica errada o chat nos passou uma pegadinha. o conceito da desetruturação é pegar um dado direto e o laço for percorrer a lista, mas como quieriamos exibir apenas o primneiro não iria funcionar, já que o loop corria a lista toda com para resolver isso basta no i < pessoa.length por i < 1 que ele só percorrerá o  primeiro item !
*/

