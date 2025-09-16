let carro = {
    marca:'Honda',
    modelo:'HR-V',
    ano: 2016
}
let contador = 0
for(let veiculo in carro){
    contador++
    console.log(`o objeto possuí ${contador} propríedades`)
}