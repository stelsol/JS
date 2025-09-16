let eu = {
    nome: "Lucas",
    idade: 21,
    profissao: "Desenvolvedor"
}
for(let dados in eu){

    console.log(dados, eu[dados])  // O [] no JavaScript serve para acessar uma propriedade de objeto usando uma string (o nome da chave). Primeiro ele pegou apenas os nomes dos objetos e quando adiciono eu[dados] ele entra dentro do objeto eu e pega um unico objeto e por fim pega o que o objeto está armazenando dentro de si.

}