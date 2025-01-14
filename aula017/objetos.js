let amigo = {nome:'Stella',sexo:'F',peso: 62.4 ,engordar:function(p = 0){
    console.log('Engordou')
    this.peso += p // this é uma referência ao objeto que está chamando a função
}} // criamos um objeto amigo com 4 atributos com uma função dentro dele
amigo.engordar(2) // chamamos a função engordar e passamos o parâmetro 2 e adicionou ao peso que de 62.4 passou a ser 64.4
console.log(`${amigo.nome} pesa ${amigo.peso} KG`)