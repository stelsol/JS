
let doc =  document.querySelector('.container')
let calc = doc.querySelector('.calc')
let gerar =  doc.querySelector('.gerar')
let mat = doc.querySelector('#materia')
let nota = doc.querySelector('#nota')
let faltas = doc.querySelector('#faltas')

let materias = []
calc.addEventListener('click', function materia(){
    
    // Var para armazenar o resultado da condição
    let situacao 
    // Aqui eu adicionaria a condição da nota ou falta e o calculo ? 
    if (Number(nota.value) < 6 || Number(faltas.value) > 20){

        situacao = " Reprovado(a) "

    }else {
        situacao = " Aprovado(a) "
    }
    // e depois adicionaria o calculo e ai viria a criação do objto??

    let boletim = {
        // nome: nome.value, // !Retirar o nome daqui, ñ tem necessidade dele aqui toda vez!
        mat: mat.value ,  
        nota: Number(nota.value), 
        faltas: Number(faltas.value),
        situacao: situacao
    }
    // console.log(nome, boletim)
    
    materias.push(boletim)
    console.log(materias)
    
}) 
gerar.addEventListener('click', function boletim(){
    //Calculo da média final do aluno com base nas matérias
    let nome = doc.querySelector('#nome').value
    let somaN = 0
    for(let i = 0; i < materias.length; i++){
        
        somaN = somaN + materias[i].nota

    }
    let MediaF = somaN / materias.length
    console.log(MediaF)
})








    //! teste 
    // let ul = doc.querySelector('.lista')
    // let li = document.createElement('li')
    // li.innerHTML = `Nome: ${nome} Materia: ${boletim.mat} Nota: ${boletim.nota} Faltas: ${boletim.faltas} Situação: ${boletim.situacao}` // teste para exibir
    // ul.appendChild(li)
