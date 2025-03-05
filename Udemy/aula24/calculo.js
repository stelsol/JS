function calcular(){
    const form = document.querySelector('.inputs')
    const peso = form.querySelector('#Peso').value
    const altura = form.querySelector('#Alt').value
    const res = document.querySelector('.res')
    const imc = (peso / (altura * altura)).toFixed(1)

    /* if(peso.length === 0 && altura.length === 0){
        alert('informe seu Peso e altura ou verifique os dados informados')
    }*/
    if(peso.length === 0 && altura.length === 0 || isNaN(peso) && isNaN(altura)){
        res.innerHTML = `<p> ⚠ Informe o peso e altura para que o calculo ocorra!</p>`
        res.style.backgroundColor="#FF8F008f"
    }
    else if(peso.length === 0 || isNaN(peso)){
        res.innerHTML = `<p> Peso invalido</p>`
        res.style.backgroundColor="#E600268f"
    }else if(altura.length === 0 || isNaN(altura)){
        res.innerHTML = `<p> Altura invalido</p>`
        res.style.backgroundColor="#E600268f"
    } else{
        if(imc < 18.5){
            res.innerHTML = `<p>Abaixo do peso seu IMC é de: ${imc}</p> `
            res.style.backgroundColor="#8dc5d6"
        }else if(imc >=18.5 && imc <= 24.9){
            res.innerHTML = `<p>Peso normal seu IMC é de: ${imc}</p> `
            res.style.backgroundColor="#50C878"
        }else if(imc >= 25 && imc <= 29.9){
            res.innerHTML = `<p>Sobrepeso seu IMC é de: ${imc}</p> `
            res.style.backgroundColor="#FBEC5D"
        }else if(imc >= 30 && imc <= 34.9){
            res.innerHTML = `<p>Obesidade grau I seu IMC é de: ${imc}</p> `
            res.style.backgroundColor="#FF8F00"
        }else if(imc >= 35 && imc <= 39.9){
            res.innerHTML = `<p>Obesidade grau II seu IMC é de: ${imc}</p> `
            res.style.backgroundColor="#EC5800"
        }else{
            res.innerHTML = `<p>Obesidade grau III seu IMC é de: ${imc}</p> `
            res.style.backgroundColor="#E60026"
        }
    res.innerHTML = " "
    //console.log(`${imc.toFixed(2)}`)
    }
}
// irei ver a resolução do professor e irei comparar!