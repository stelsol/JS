// Seu desafio:
// 1. Use `for` para percorrer `alunos`.
// 2. Use desestruturação para pegar o nome e a primeira nota.
// 3. Mostre no console: "Lucas tirou 8 na primeira prova"
const alunos = [
    { nome: "Lucas", notas: [8, 7, 9] },
    { nome: "Mariana", notas: [6, 9, 8] },
    { nome: "Pedro", notas: [7, 8, 7] }
];

for(let i = 0; i < 1; i++){
    let {nome,notas:[nota1]} = alunos[i]
    console.log(`${nome} tirou ${nota1} na primeira prova`)
}


// const alunos = [
//     { nome: "Lucas", notas: [8, 7, 9] },
//     { nome: "Mariana", notas: [6, 9, 8] },
//     { nome: "Pedro", notas: [7, 8, 7] }
// ];
//! mas lenbrando que os conceigtos do for e da desestruturação não é para este tipo de caso nos casos reais usariamos outras abordagens!!
// for(let i = 2; i < alunos.length; i++){ //? erramos aqui tambem ao invez de percorrer a lista toda deviamos ter colocado para percorrer apenas o primeirok, por isso estava dando tudo errado 
//     let {nome,notas} = alunos[i] //* devemos entrar dentro do arrei notas aqui para ai pegar as primeiras notas
//     console.log(`${alunos[0]["nome"]} tirou ${alunos[0]["notas"][0]} na primeira prova`)
// }