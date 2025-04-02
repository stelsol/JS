/*const verdade = true
//! Escopo global 
let nome = 'Stella'  //! Criada
// Criar duas lets com mesmo nome não funciona da erro, ja se criarmos duas vars com o mesmo nome elas se sobre escrevem e funciona
var nome2 = 'Stella' //!Declarada
// var nome2 = 'Joana' ira exibir o joana se compular 

//console.log(nome, nome2)
//? Bloco maior
if (verdade){
    let nome = 'Anna' //!Criada
    var nome2 = 'Bianca' //!Redeclarada
   // console.log(nome,nome2)
  //!Bloco Menor     Se não houver console log em nenhum dos dois apenas no menor, então sera exibido ele, se no menor não huver o console.log sera analisado no maior que sera exibido se houver. Mas se em ambos não houver ira exibir o do escopo global. Criamos varias lets om o mesmo nome de variavel, mas nenhuma é considerada a mesma pois estão sendo criadas dentro de outros blocos!
    if(verdade){
        let nome = 'Joana' //! Criada
        var nome2 = 'Carol' //!Redeclarada
       // console.log(nome, nome2)
    }
}
console.log(nome, nome2)
// ira exibir o nome = stella da global pois ele ta fora dos blocos, mas como var não é criada novamente só redeclarada agora ele passa a ser carol.
 //! O Let funciona em blocos enquanto o var funciona em funções. 
 console.log(nome)
 outra diferença !
 var nome = 'isa'// da undefined
 
 console.log(fruta)
 let fruta = 'maça' // error
 */
const TIPOS = true

let frut ='Maça'
var frut2 ='Castanha'

if(TIPOS){
    let frut ='Morango'
    var frut2 ='Pera'
    
    if(TIPOS){
        let frut = 'Goiaba'
        var frut2 = 'Mamão'
    }
}
console.log(frut, frut2)