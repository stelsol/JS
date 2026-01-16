
let todo = document.querySelector('.container')
let nome = todo.querySelector('#nome').value
todo.addEventListener('submit', function criarp(){  
        let p = document.createElement('p')
        let exibindo = document.getElementById('resultado')

        p.innerHTML = `Olá ${nome} você é`

        exibindo.appendChild(p)
    }) 
    