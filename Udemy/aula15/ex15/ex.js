let pnum = Number(prompt('Digite um numero: '))
//let conver = 2 método pra conversão
let spa = document.getElementById('num')
let res = document.getElementById('resultado')
spa.innerHTML = `${pnum}`

res.innerHTML = `<p>Raiz Quadrada: ${pnum** 0.5} </p>`

res.innerHTML += `<p> ${pnum} é inteiro : ${Number.isInteger(pnum)} </p>`

res.innerHTML += `<p>É NaN: ${Number.isNaN(pnum)} </p>`

res.innerHTML += `<p>Arredondando para baixo : ${Math.floor(pnum)} </p>`

res.innerHTML += `<p>Arredondando para baixo : ${Math.ceil(pnum)} </p>`

res.innerHTML += `<p>Com duas casas decimais: ${Number(pnum).toFixed(2)} </p>` 
/*Na verdade era sim necessário fazer a conversão mas ele não fez então moifiquei meu código. tinha feito desta forma. ele fez sim só vi depois sksksk: 

let pnum = prompt('Digite um numero: ')
let conver = Number(pnum)
num.innerHTML = `${conver}`

res.innerHTML = `<p>Raiz Quadrada: ${conver** 0.5} </p>`

res.innerHTML += `<p> ${conver} é inteiro : ${Number.isInteger(conver)} </p>`

res.innerHTML += `<p>É NaN: ${Number.isNaN(conver)} </p>`

res.innerHTML += `<p>Arredondando para baixo : ${Math.floor(conver)} </p>`

res.innerHTML += `<p>Arredondando para baixo : ${Math.ceil(conver)} </p>`

*/