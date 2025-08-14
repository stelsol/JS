// Seu desafio:
// 1. Use `for` para percorrer `produtos`.
// 2. Use desestruturação para pegar `nome` e `preco`.
// 3. Mostre no console: "Produto: Mouse - Preço: R$50"
const produtos = [
    { nome: "Mouse", preco: 50, categoria: "Informática" },
    { nome: "Camiseta", preco: 30, categoria: "Vestuário" },
    { nome: "Bola", preco: 20, categoria: "Esporte" }
];

for(let i= 2; i < produtos.length; i++){
    let {pessoa1, pessoa2,pessoa3} = produtos
    console.log(produtos[pessoa1])
}