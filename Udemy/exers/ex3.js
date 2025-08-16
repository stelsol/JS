// Seu desafio:
// 1. Use `for` para percorrer `alunos`.
// 2. Use desestruturação para pegar o nome e a primeira nota.
// 3. Mostre no console: "Lucas tirou 8 na primeira prova"
const alunos = [
    { nome: "Lucas", notas: [8, 7, 9] },
    { nome: "Mariana", notas: [6, 9, 8] },
    { nome: "Pedro", notas: [7, 8, 7] }
];

for(let i = 2; i < alunos.length; i++){
    let {nome,notas} = alunos[i]
    console.log(`${alunos[0]["nome"]} tirou ${alunos[0]["notas"][0]} na primeira prova`)
}