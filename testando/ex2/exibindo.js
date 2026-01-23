
const form = document.querySelector('.container')

form.addEventListener('click',function exibir(){ // criamos um evento que ao clicar ira exibir a lista de arrays!!
        const listaN = [1,2,3,4,5]
        let ul = document.querySelector('.lista') // pegamos a classe lista, onde sera exibida as li


        if(ul.children.length === 0){
            for(let i = 0; i < listaN.length; i++){  // laço onde será percorrido com base no comprimento do array que temos.
                let li = document.createElement('li') // li estão sendo criadas aqui 
                li.innerHTML = `${listaN[i]}`  // essa linha e a proxima será responsavel por exibilas
                ul.appendChild(li)
            }

        }else{

            ul.innerHTML = " " // apaga a lista toda vez que clicar no botão novamente para não criar um monte de cópias da mesma!

        }

    })
    
    