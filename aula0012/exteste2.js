const id = 14
const pais = "Paris"
console.log (`Você tem ${id} anos e está no(a) ${pais}`)
if(id >= 18 && pais === "Brasil"){
    console.log('Acesso liberado')
}else if(id < 18){
    console.log('Menor de idade, Acesso Negado!')
}else if (pais !== "Brasil"){
    console.log('País fora da área, Acesso Negado!')
}