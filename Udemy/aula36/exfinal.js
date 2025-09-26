let usuario = {
    nome: "Ana",
    idade: 25,
    profissao: "Designer",
    cidade: "São Paulo"
}
for(let informacoes in usuario){
    console.log(`${informacoes} -> ${usuario[informacoes]}`)
    
}
// a parte da frase não precisa ficar dentro do laço pois o desafio era pegar o dado contido dentro do objeto e exibilo fora
console.log(`O usuário ${usuario.nome} tem ${usuario.idade}, atua na area de ${usuario.profissao} e vive em ${usuario.cidade}`)
