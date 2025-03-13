/*const tresh = 60 * 60 * 3 * 1000
const Umdia = 60*60*24*1000
dconst data = new Date(0 + tresh + Umdia)
console.log(ata.toString()) 

Maneira 1 --> const data = new Date()
Maneira 2 --> const data = new Date(1741826261169) // Valor em milisegundos 
Maneira 3 --> const data = new Date('2019-04-20 20:20:59') // Data string obs: podemos utilizar um espaço ou um T para indicar que depois do dia é horas e podemos ter milisegundos tbm!
Maneira 4 --> const data = new Date(2019, 3 , 12 , 20 , 15, 50, 999)// Ano, Mês(0=Jan a 11=Dec), dia, hora, minuto, segundo e milissegundos



*/

/*const data = new Date(2019,2,15,9,45,59,1000)// se mudarmos de 59 para 60 já muda de 45 para 46 e se mudarmos 999 para 1000 de 59 vai pra 60 virando a hr para 46.
console.log(data.toString())
console.log('dia',data.getDate())
const data = new Date(1741826261169)
console.log(data.setFullYear(2004))
console.log(data.toString())
console.log(Date.now())
*/
function zeroesquerda(num){
    return num >= 10 ? num :`0${num}`// se não ira adicionar 0 a esquerda do numero
}

function fordata (data){
//onsole.log(data)
const dia = zeroesquerda(data.getDate())
const mes = zeroesquerda(data.getMonth() + 1)
const ano = zeroesquerda(data.getFullYear())
const hora = zeroesquerda(data.getHours())
const min = zeroesquerda(data.getMinutes())
const seg = zeroesquerda(data.getSeconds())
return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
//12/3/2025  22:8:17 retornou assim sem formatação vamos por o zero a esquerda
}
const data = new Date()
const mudarano = data.setFullYear(2004)//testando Alterar ano
const databrasil = fordata(data)
console.log(databrasil)