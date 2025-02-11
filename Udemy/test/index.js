// Preciso melhorar !

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
 
 //console.log(`${nome.value} ${snome.value} ${peso.value} ${altura.value}`)

}

/* Fazendo como ele fez: lembrando ele não utilizou css e nem onclick;
ele quer que a pagina não atualize. 

O jeito dele bem melhor e segue as boas praticas

function MeuEscopo(){
   const form = document.querySelector('#form')
   const res = document.querySelector('#res')

   const Pessoas = []
   function RecebeEventoSubmit (evento){
      evento.preventdefault()
      evento.preventdefault()
      const nome = form.querySelector('#nome')
      const Snome = form.querySelector('#Snome')
      const Peso = form.querySelector('#Peso')
      const Alt = form.querySelector('#Altura')

      pessoas.push({
         nome:nome.value,
         Snome:Snome.value,
         Peso:Peso.value,
         Alt:Alt.value
      })
      
      res.inner += `${nome.value} ${Snome.value} ${Peso.value} ${Alt.value}`
   }

   form.addEventListener('Submit', RecebeEventoSubmit)
}
   MeuEscopo()
*/