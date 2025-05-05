//! Laço FOR 
//! Para funcinar subtraindo utilizamos o sinal de >
// for (let i = 10; i >= 0; i--){
//     console.log(`bloco ${i}`)
// }

// ! Para funcionar adicionando utilizamos o sinal de <
// for (let i = 0; i <= 10; i++){
//     console.log(`bloco ${i}`)
// }
//! Para Taubuada 
    // for(let i = 0 ; i <= 10; i++){
    //     let tabuada = 7
    //     let mult = tabuada * i 
    //     console.log(`${tabuada} X ${i} = ${mult}`)
    // }

//! Para percorrer arrays 
const frutas = ['Morango', 'Uva', 'Abacate', 'Manga', 'Stella','carro']

for( let i = 0; i < frutas.length; i++){
    console.log(`${i}`,frutas[i])
}