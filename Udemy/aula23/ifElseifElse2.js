//Parte 2 do IF / ELSE IF / ELSE

const numero = 3
// Se (numero >= 0 && numero <= 5) for verdadeiro então executar O numero está entre 0 e 5.
//Se não executar isso Onumero não está entre 0 e 5.  
// Se Não Se (numero >= 6 && numero <= 8) for verdadeiro então executar O numero está entre 6 e 8.


if(numero >= 0 && numero <= 5){
    console.log('O numero está entre 0 e 5')
}else if(numero >= 6 && numero <= 8){
    console.log('O numero está entre 6 e 8')
}else if( numero >= 9 && numero <= 11){
    console.log('O numero está entre 9 e 11')
}else{
    console.log('O numero Não está entre 9 e 11')
}
