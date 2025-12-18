// const paragrafos = document.querySelector('paragrafos') //! Seleciona apenas o primeiro elemento, no caso 1 só
// const ps = document.querySelectorAll('p')  //! Seleciona a coleção inteira de elementos no caso os 4 P

const ps = document.querySelectorAll('p')
// console.log(ps):
// for(let i = 0; i <= ps.length;i++){
//     console.log(ps[i])
// }

const corbody =  getComputedStyle(document.body)
const backgroundcor = corbody.backgroundColor
// console.log(backgroundcor)
for(let p of ps){
    p.style.backgroundColor = backgroundcor
    p.style.color = 'white'
}
//! aqui conseguimos exibir os 4 paragrafos no console do browser
//* Acertamos a resolução !!!


