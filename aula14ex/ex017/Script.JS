function tabuada(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')

    if(num.value.length == ''){
        alert('[ERROR]Por favor informe um número')
    } else{
        
       let n = Number(num.value)

       for(let nm = 1 ; nm <= 10 ; nm++){
        
        let mul = n * nm 

        res.innerHTML += `${n} X ${nm} = ${mul} <br>`
       }
    }


}
function apagar(){
    let del = document.getElementsByClassName('del')
    let res = document.getElementById('res')
    
    res.innerHTML = ' '
   
}