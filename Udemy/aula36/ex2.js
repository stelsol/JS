let aluno = {
    nome:"Lucas",
    idade:20 ,
    curso:"ADS",
    cidade:"Taubaté"
};
let contador = 0
for (let indice in aluno){
    contador++
}
console.log(`o objeto possui ${contador} indices`)
// adicionamos um contador como se fosse um for tradicional