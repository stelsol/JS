function cal(){
    let Name = document.getElementById('txtn')
    let ida = document.getElementById('txti')
    let Peso = document.getElementById('pes')
    let Altura = document.getElementById('alt')
    let res = document.getElementById('res')
    let fsex = document.getElementsByName('rsex')

    //Verificando se tem algum erro ou falta de dados
    if(Name.value.trim() === ''|| Number(ida.value) <= 0 || Number(Peso.value) <= 0 || Number(Altura.value) <= 0){
        alert('[ERROR] Alguma informação está incorreta')
    }else{
        //cálculo IMC
        let calc = Number(Peso.value)/(Number(Altura.value)* Number(Altura.value))
        let rcorrigida = calc.toFixed(1)

        let gen =''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if(rcorrigida <= 18.5){

                //abaixo do peso
            img.setAttribute('src', 'mas-p.png')
            }else if(rcorrigida <= 24.9){
                //peso normal 
                img.setAttribute('src', 'mas-m.png')
            }else if(rcorrigida <= 29.9){
                //Sobre peso
                img.setAttribute('src','mas-G.png')
            }else if(rcorrigida <= 39.9){
                //Obesidade
                img.setAttribute('src','mas-GG.png')
            }else{
                //Obesidade Mórbida
            }
        }else if (fsex[1].checked){
            gen = 'Mulher'
            if(rcorrigida <= 22.0){
                //abaixo do peso
                img.setAttribute('src','fem-p.png')
            }else if(rcorrigida < 24.9){
                //peso normal 
                img.setAttribute('src', 'fem-m.png')
            }else if(rcorrigida < 29.9){
                //Sobre peso
                img.setAttribute('src','fem-G.png')
            }else if(rcorrigida < 39.9){
                //Obesidade
                img.setAttribute('src','fem-GG.png')
            }else{
                //obesidade móbida
            }
        }

    res.innerHTML = `Nome: ${Name.value} idade: ${ida.value} Resultado do IMC: ${rcorrigida}`
        res.appendChild(img)
    }
   
   
}