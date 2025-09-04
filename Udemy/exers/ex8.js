function mostrarPessoas(){
    let pessoas = [ { nome: "Ana", idade: 25 }, { nome: "Carlos", idade: 30 }, { nome:
"Julia", idade: 20 } ]

    for(let i = 0; i < pessoas.length; i++){
        let {nome, idade} = pessoas[i]
        console.log(`Nome: ${nome}, Idade: ${idade}`)
    }
}
mostrarPessoas()
