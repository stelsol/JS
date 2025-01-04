function verificar(){
    let num = document.getElementById('Num')
    let res = document.getElementById('res')

    if(num.value.trim() === "" || Number(num.value) <= 0){

        alert('Insira um nùmero valido')

    } else if(Number(num.value) % 2 == 0){

        res.innerHTML = `O número ${num.value} é PAR`
        res.style.color = '#008000'
    } else{

        res.innerHTML = `O número ${num.value} é IMPAR`
        res.style.color = '#ff0000'
    }
   
}
function Del(){
    let res = document.getElementById('res')
    let Num = document.getElementById('Num')
    res.innerHTML = " " // Limpa o valor do res
    Num.value = " " // Limpa o valor do input
}