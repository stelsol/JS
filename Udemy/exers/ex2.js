// Seu desafio:
// 1. Use `for` para percorrer `produtos`.
// 2. Use desestruturação para pegar `nome` e `preco`.
// 3. Mostre no console: "Produto: Mouse - Preço: R$50"
const produtos = [
    { nome: "Mouse", preco: 50, categoria: "Informática" },
    { nome: "Camiseta", preco: 30, categoria: "Vestuário" },
    { nome: "Bola", preco: 20, categoria: "Esporte" }
];

for(let i= 0; i < 1; i++){
    let{nome, preco} = produtos[i]
    console.log(` Produto: ${nome} - Preço: R$${preco}`)
}
// este está errado 
// const produtos = [
//     { nome: "Mouse", preco: 50, categoria: "Informática" },
//     { nome: "Camiseta", preco: 30, categoria: "Vestuário" },
//     { nome: "Bola", preco: 20, categoria: "Esporte" }
// ];

// for(let i= 0; i < produtos.length; i++){ o mesmo equivale aqui, devemos sempre prestar atenção no conceito e na lógica do que iremos utilizar!!
//     let{nome, preco, categoria} = produtos[i]
//     console.log(` Produto: ${produtos[0]["nome"]} - Preço: ${produtos[0]["preco"]}`)
// }