//! 3 Ex FizzBuzz

function fizzbuzz(i){
    if( typeof(i) !== "number" ){
        return  typeof(i)
    }
    return i
}


for(let i = 0; i <= 100; i++){
    console.log(fizzbuzz(i))
} 

//! tentativa com o ternario para fixar melhor 


//function fizzbuzz(i){

//     return typeof(i) !== "number" ? typeof(i) : i;

//     }

// for(let i = 0; i <= 100; i++){
//     console.log(fizzbuzz(i))
// } 