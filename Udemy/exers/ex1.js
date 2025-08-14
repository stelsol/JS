// Seu desafio:
// 1. Use um laço `for`.
// 2. Use desestruturação para pegar nome e idade.
// 3. Mostre no console: "Nome: Ana, Idade: 25"
const pessoas = [
    ["Ana", 25], ["Carlos", 30], ["Beatriz", 22]
];

for(let i = 2; i < pessoas.length; i++){
    let [ pessoa1, pessoa2,pessoa3] = pessoas
    console.log(`Nome: ${pessoa1[0]}, Idade: ${pessoa1[1]}`)
}

