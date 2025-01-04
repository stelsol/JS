var id = 12 
console.log(`Você tem ${id} anos seu voto é: `)
if(id < 16){
    console.log('Não vota')
} else if( id < 18 || id > 65){
     console.log('Opcional!')
} else {
    console.log('Obrigatório!!')
}
