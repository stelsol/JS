
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
    let ul = doc.querySelector('.lista')
    let somaN = 0

    //! Exibindo o nome do aluno no Boletim
    let h2 = document.createElement('h2')
    let aluBoletim = doc.querySelector('.aluBoletim')
    h2.innerHTML = `Aluno(a): ${nome} `
    aluBoletim.appendChild(h2)

    //* Aqui será exibido a lista de materias com as informações de cada uma
    for(let i = 0; i < materias.length; i++){
        
        let li = document.createElement('li')
        li.innerHTML = `Materia: ${materias[i].mat} | Nota: ${materias[i].nota} | Faltas: ${materias[i].faltas} | Situação: ${materias[i].situacao}` 
        ul.appendChild(li)


        somaN = somaN + materias[i].nota

    }
    let MediaF = somaN / materias.length

    let medf = doc.querySelector('.medF')
    let p = document.createElement('p')
    p.innerHTML = `Média-Final: ${MediaF}`
    medf.appendChild(p)
    // console.log(nome)
    // console.log(MediaF)
})








    //! teste 
    // let ul = doc.querySelector('.lista')
    // let li = document.createElement('li')
    // li.innerHTML = `Materia: ${boletim.mat} Nota: ${boletim.nota} Faltas: ${boletim.faltas} Situação: ${boletim.situacao}` // teste para exibir
    // ul.appendChild(li)
