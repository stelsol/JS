// let i = 0
// while( i <= 10){
//     console.log(i)
//     i++
// }

//! Esse código gera numeros aleatórios e para somente quando o 10 aparecer: utilizamos function e aprendemos o uso do while
// function random(min, max){
//     const r = Math.random() * (max - min) + min //* Formula para gerar numeros aleatórios, adaptamos ela para fazer numeros inteiros 
//     return Math.floor(r)

// }
// const min = 0
// const max = 100  //! como aqui na formula não utilizamos o +1 o 100 não aparece então vai de 0 a 99
// let rand = random(min, max)
// while (rand !== 10){ //! Aqui colocamos uma condição de o código rodar e vai parar só quando o 10 aparecer 
//     rand = random(min,max)
//     console.log(rand)
// }

function numaleatorio(min, max){
    const n = Math.random() * ((max - min) +1 ) + min  //! aqui adicionei o +1 e agoora vai de 0 a 100
    return Math.floor(n)
}
const min = 0
const max= 100
let r = numaleatorio(min, max)
while( r !== 20){
    r = numaleatorio(min, max)
    console.log(r)
}