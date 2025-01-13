let num = document.getElementById('num')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function Adicionar(){
    let number = Number(num.value) //convertendo para numero
    if(number == ''){
        alert('Digite um número')
    }else if( number < 1 || number > 100 || valores.includes(number)){
        alert('O valor é invalido ou já foi adicionado')
    }else{
        valores.push(number) // adiciona valor no array
        let ret = document.createElement('option') // criando uma tag option dentro do select
        ret.text = `Valor ${number} foi adicionado` // criamos o texto que ira aparecer dentro desta option
        lista.appendChild(ret) // adicionamos a option e exibimos o conteudo dela na tela
        res.innerHTML = ''
    }
    num.value =''
    num.focus()        
}

function Finalizar(){
    let numero = Number(num.value)
    if(valores.length == 0){
        alert('Adicione valores para poder finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0 
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos > maior]){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        media = soma / tot
        }
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} valores </p>`
        res.innerHTML += `<p> O maior número é ${maior} </p>`
        res.innerHTML += `<p> O menor número é  ${menor} </p>`
        res.innerHTML += `<p> A soma de todos os números é igua a ${soma} </p>`
        res.innerHTML += `<p> A média dos números é de ${media} </p>`
    }
}

/* ou podemos fazer assim: 
let quant = valores.length
        let maior = Math.max(...valores)// percorre o array e retorna o maior.
        let menor = Math.min(...valores)// percorre o array e retorna o menor.
        let soma = valores.reduce((total , valor) => total + valor, 0) // esta é uma função acumuladora que percorre o array e soma cada valor.
        let media = soma / quant //calcula a média
        // */