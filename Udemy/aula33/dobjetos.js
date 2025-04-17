/*Aprendendo sobre Desestruturação via objetos
//! vimos a Básica, Padrão, Renomear e aninhadas
//* Tudo o que aprendemos também replica nas aninhadas!

*/

const pessoa = {
    nome:'Kauã',
    idade: 21,
    cidade:'Taubaté',
    endereco: {
        rua: 'r.Domingos Lofuto',
        numero:130
    }
}
const {nome: n,idade,cidade, endereco:{rua,numero}, endereco} = pessoa

console.log(endereco)
