/*//! Aprendendo desestruturação de arrays

let presentes = ['Bola','Boneca','avião']
let [present1, present2,present3] = presentes


//! Ignorando alguma informação que não quisermos

let lanches = ['Brigadeiro', 'Pizza', 'Sanduiche']
let [lanche1, lanche2, lanche3] =lanches

console.log(lanche1, lanche3)
//!Pegando o resto 
let numeros = [10, 20, 30, 40, 50, 60, 70, 80,]
let [primeiro, segundo, terceiro, ...rest] = numeros

console.log(rest)
console.log(present3, present1)
//!                  0             1             2
//?             0    1   2     0   1   2    0    1   2
let numeros = [[10, 20, 30], [40, 50, 60], [70, 80, 90]]
console.log(numeros [1][1]) // vai exibir 50, pois ele pegou o array com indice 1 e dentro tinha o outro array e continha um indeci 1 que estava guardando o numero 50
*/
//* maneira mais complexa 
//!                  0             1             2
//?             0    1   2     0   1   2    0    1   2
let numeros = [[10, 20, 30], [40, 50, 60], [70, 80, 90]]
let [,,[,,noventa]] = numeros
console.log(noventa)



// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = [b,c,a];
// [a,b,c] = letras;
// console.log(a,b,c);

// const furtas = ['bananas','uva','morango']
// [uva,morango,bananas] = furtas

// console.log(uva)
