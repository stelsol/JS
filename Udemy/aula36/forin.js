let Pessoa = {
    nome: 'STELLA',
    idade:21,
    cidade: 'Taubaté'
}
    // for( let chave in Pessoa){
    //     console.log( Pessoa['nome'])
    // } exemplo peguei apenas o nome mas não da para pegar individualmente. 

// console.log(Pessoa.nome)
// console.log(Pessoa['nome']) Duas maneiras de pegar uma propriedade
// for (let chaves in Pessoa){
//     console.log(chaves, Pessoa[chaves])   mostra a chave e o dado contido dentro dela
//      console.log(Pessoa[chaves]) aparece os dados contidos dentro das chaves
//       console.log(chaves) Assim ele exibe apenas as chaves
// }

// let Frutas =[ 'uva','maça','pera'] não devemos utilizar o for in em arrays ele é melhor com objetos

// for( let i in Frutas){ // neste caso ele está apenas lendo o indice das frutas 0,1,2
//     console.log(Frutas[i]) // console.log(frutas[i]) // aqui ele irá ler o indice mas retornara as frutas
// }
// for(let i = 0; i < Frutas.length ; i++){
 //     console.log(Frutas[i])
 // }