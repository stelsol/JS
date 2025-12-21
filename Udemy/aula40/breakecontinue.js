//! Continue  Continua para próximq interação 
//! Break : Sai do Laço
// const numero = [1,2,3,4,5]

// for (numeros of numero){

//     if(numeros === 2){
//         console.log("Pulei o n 2")
//         continue;
//     }

//     console.log(numeros)
// }

const numero = [1,2,3,4,5,6,7]

for (i in numero){
    let numeros = numero[i]
    if(numeros === 2){
        console.log("Pulei o n 2")
        continue;
    }
    

    if(numeros === 7){
        console.log("encontrei o n 7 saindo")
        break;
    }
    console.log(numeros)
}