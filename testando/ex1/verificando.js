let form = document.querySelector('.dados')

form.addEventListener('submit', function bloquear(evento){
    evento.preventDefault()

})

form.addEventListener('submit', function coletaDados(){
let nome = form.querySelector('#nome').value
let idade = Number(form.querySelector('#idade').value)

let resul;
    function verficar(){
        

        if(idade < 18){
            resul = 'Menor de idade!'
        }else{
        resul = 'Maior de idade!'
        }
        
    }
verficar()
})

