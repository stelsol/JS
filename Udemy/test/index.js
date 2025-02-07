function Exibir(){
 const nome = document.querySelector('#Nome')
 const snome = document.querySelector('#Snome')
 const peso = document.querySelector('#Peso')
 const altura = document.querySelector('#Alt')
 
const pessoas = []
 pessoas.push({
    nome:nome.value,
    snome:snome.value,
    peso:peso.value,
    altura:altura.value
 })
 
 let res = document.querySelector('#res')
 res.innerHTML += `<p>Nome : ${nome.value} ${snome.value} Peso: ${peso.value} Altura:  ${altura.value}</p>`
 
 console.log(`${nome.value} ${snome.value} ${peso.value} ${altura.value}`)
}