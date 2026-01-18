

let form = document.querySelector('.dados')

form.addEventListener('submit', function bloquear(evento){
    evento.preventDefault()

})

form.addEventListener('submit', function coletaDados(){
let nome = form.querySelector('#nome').value
let idade = Number(form.querySelector('#idade').value)


    function verificar(){
            let resul;

            if(idade < 18){
                resul = 'Menor de idade!'
            }else{
            resul = 'Maior de idade!'
            }
            return resul

        }
        

    function criarp(){
        let p = document.createElement('p')
        let exibindo = document.getElementById('resultado')
        p.innerHTML = `Olá ${nome} você é ${verificar()}`
        exibindo.innerHTML = " "
        exibindo.appendChild(p)
    }
    criarp()
})
