//! 3 Ex FizzBuzz

function fizzbuzz(i){
    if( typeof(i) !== "number" ){
        return  typeof(i)
    }
    if( i % 3 === 0 && i % 5 === 0){
        return "FizzBuzz"
    }
    if(i % 3 === 0){
        return "Fizz"
    }
    if(i % 5 === 0){
        return "Buzz"
    }
    if ( !(i % 3 == 0 && i % 5 === 0) ){
        return i    //! como aqui já é final não precisa desse if poderia ter colocado apenas return, pois se chegou aqui o que sobrou não é divisivel por eles
    }
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