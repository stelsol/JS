/*Aprendendo sobre Desestruturação via objetos
//! vimos a Básica, Padrão, Renomear e aninhadas
//* Tudo o que aprendemos também replica nas aninhadas!

*/

// const pessoa = {
//     nome:'Kauã',
//     idade: 21,
//     cidade:'Taubaté',
//     endereco: {
//         rua: 'r.Domingos Lofuto',
//         numero:130
//     }
// }
// const {nome: n,idade,cidade, endereco:{rua,numero}, endereco} = pessoa

// console.log(endereco)

const frutas = {
    f1:'Banana',
    f2:'Uva',
    f3:'Morango',
    calda:{
        c1:'Chocolate',
        c2:'Chocolate Branco'
    }
}
const {calda:{c1,c2}}=frutas
// Via desestruturação é para desestruturar e pegar informações exatas que seja necessaria
console.log(frutas) 
