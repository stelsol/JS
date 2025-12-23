//Criar uma function chamada épaisagem, e a mesma tem que receber dois argumentos altura e largura e se os argumentos passados forem modo paisagem retorna true.

// function epaisagem(altura, largura){
//     if(altura > largura){
//         return false
//     }   //! Não precisa necessáriamente de true e false, pois se colocarmos apenas para retornar ele já nos retorna true or false
//     return true
// }
// const modopaisagem = epaisagem(10, 400)
// console.log(modopaisagem)

//! Modo simplificado :

const epaisagem = (altura, largura) => altura > largura ? false : true;

const modopaisagem = epaisagem(10)
console.log(modopaisagem)
