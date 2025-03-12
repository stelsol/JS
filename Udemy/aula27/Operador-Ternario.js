/* Aprendento operador ternario  (condição) ? 'Valor para verdadeiro': 'valor para falso' 
const pontuacaoUsuario = 1000

if (pontuacaoUsuario >= 1000){
    console.log('Usuário VIP')
}else{
    console.log('Usuário Normal')
}
    / Ex 1 
const pontuacaoUsuario = 1000
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal'
console.log(nivelUsuario)

/ Ex2
const n = 10
const resultado = n % 2 === 0 ? 'Par' : 'impar'
console.log(resultado)  

/Ex3 
const  idade = 18
const verificar = idade >= 18 ? 'maior de Idade' : 'Menor de Idade'
console.log(verificar)
/Ex 4 atribuir um valor padrão

const nome = 'José'
const Nomeexibido = nome ? nome : 'Visitante' / se não ouver um nome então sera atribuido um valor padrão a ele como visitante! 
console.log(Nomeexibido)
/ Ex 5 Functions 
function Doce(fruta){
    if(fruta === 'Maçã' || fruta === 'Banana'){
        return 'Fruta Doce'
    }else{
        return 'Fruta Azeda!!'
}
}
console.log(Doce('Banana')) / Pasamos um parametro para que a function funcione!
function Doce (Fruta){
    return Fruta === 'Maçã' || Fruta === 'Banana'? 'Fruta Doce' : 'Fruta Azeda!'
}
console.log(Doce('Morango')) / Para Declarar o paramento colocamos o nome da function e ai passamos o parametro para ela!
function positivo (N){
    return N >= 0 ? 'Positivo ': 'Negativo'
}
console.log(positivo(-3))
*/