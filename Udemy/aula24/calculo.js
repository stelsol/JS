function calcular(){
    const form = document.querySelector('.inputs')
    const peso = form.querySelector('#Peso').value
    const altura = form.querySelector('#Alt').value
    const res = document.querySelector('.res')
    const imc = (peso / (altura * altura)).toFixed(1)

    if(peso.length === 0 && altura.length === 0){
        alert('informe seu Peso e altura ou verifique os dados informados')
    }
    if(imc < 18.5){
        res.innerHTML = `<p>Abaixo do peso</p> `
        res.style.backgroundColor="#8dc5d6"
    }else if(imc >=18.5 && imc <= 24.9){
        res.innerHTML = `<p>Peso normal</p> `
        res.style.backgroundColor="#50C878"
    }else if(imc >= 25 && imc <= 29.9){
        res.innerHTML = `<p>Sobrepeso</p> `
        res.style.backgroundColor="#FBEC5D"
    }else if(imc >= 30 && imc <= 34.9){
        res.innerHTML = `<p>Obesidade grau I</p> `
        res.style.backgroundColor="#FF8F00"
    }else if(imc >= 35 && imc <= 39.9){
        res.innerHTML = `<p>Obesidade grau II</p> `
        res.style.backgroundColor="#EC5800"
    }else if(imc > 40){
        res.innerHTML = `<p>Obesidade grau III</p> `
        res.style.backgroundColor="#E60026"
    }
    //res.innerHTML = " "
    //console.log(`${imc.toFixed(2)}`)
}