let doc =  document.querySelector('.container')
let calc = doc.querySelector('.calc')
let gerar =  doc.querySelector('.gerar')
let nome = doc.querySelector('#nome')
let mat = doc.querySelector('#materia')
let nota = doc.querySelector('#nota')
let faltas = doc.querySelector('#faltas')

calc.addEventListener('click', function materia(){

    let boletim = {
        nome: nome.value, // !Retirar o nome daqui, ñ tem necessidade dele aqui toda vez!
        mat: mat.value ,  
        nota: Number(nota.value), 
        faltas: Number(faltas.value)
    }
    console.log(boletim)

})