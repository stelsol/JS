//Dados imutaveis: String, Number, Boolean, Undefined, Null(Bigint, Symbol)

/* O valor ira continuar L pois é imutavel
let nome = 'Stella'
nome[0] = 'R' // Fizemos como em array
console.log(nome[0])

e quando quisermos que uma variavel tenha o mesmo valor que a outra ex:

let a = 'A'
let b = a // fizemos uma cópia do valor de A
console.log(a,b)

a = 'F'
console.log(a,b) // F A --> nisso vimos que os valores primitivos fazem uma cópia do dado e se alterarmos ele não será afetado pois ele tem um lugar na memória 

ja os valores mutaveis/ por referência : Array, Object, Function

let a = [1,2,3]
let b = a // aqui fizemos uma referência, ambos apontam para o mesmo lugar na  meméria, então se alterarmos a, b será alterado e assim também serve para b 
a.push(4)
console.log(a,b)// [1,2,3,4] [1,2,3,4]--> ambos se modificaaram pois apontam para o mesmo lugar na memória 
 
se quisermos fazer uma cópia assim como nos imutaveis, utilizamos ...
let s = [1,2,3]
let d = [...s] // agora ele fez uma cópia do dado armazenado dentro de s então ambos são independentes.

s.pop()
console.log(s,d)

// [1,2] [1,2,3] // Apenas s modificou pois agora d tem um espaço da memória apenas dele mas se adicionarmos mais uma variavel e pedirmos como ex let c = d, agora se alterarmos d, també ira alterrar c, pois est~´ao apontando para o mesmo local na memória, mas A continua independente entao se modificaarmos ela, não altera as outras duas.

está partes dos valores mutaveis também serve para objetos!!
*/