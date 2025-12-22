//Crie uma function que receba 2 numeros e retorne o maior deles 

// function maiorn(x,y){
//     let maior = Math.max(x,y)
//     console.log(maior)
// }
// maiorn(300, 840)

//! A nossa forma não está errada mas ela n retorna o numero apenas está exibindo o maior, o certo seria :

// function maiorn(x, y) {
//     return Math.max(x, y);
// }

// const resultado = maiorn(300, 840);
// console.log(resultado);

//! O que o professor queria era assim 

function maiorn(X,Y){
    if( X > Y){
        return X
    }else{
        return Y
    }
}

const resultado = maiorn(300,5000)
console.log(resultado)