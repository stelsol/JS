let aluno = {
    matematica: 8,
    portugues: 7,
    ciencias: 9
}

for(let materia in aluno){
    console.log(`Matéria: ${materia} - nota: ${aluno[materia]}`)
}