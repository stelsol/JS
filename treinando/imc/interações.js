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
        let mensagem =''
        if (fsex[0].checked){
            gen = 'Homem'
            if(rcorrigida <= 18.5){

                //abaixo do peso
                img.setAttribute('src', 'mas-p.png')
                mensagem = '<span style="color:#008CCA;">Abaixo do peso</span>'
            }else if(rcorrigida <= 24.9){
                //peso normal 
                img.setAttribute('src', 'mas-m.png')
                mensagem = '<span style="color:#119822;"> Peso na Média </span>'
            }else if(rcorrigida <= 29.9){
                //Sobre peso
                img.setAttribute('src','mas-G.png')
                mensagem = '<span style="color:#f8af00;">Sobrepeso</span>'
            }else if(rcorrigida <= 34.9){
                //Obesidade I
                img.setAttribute('src','mas-GG.png')
                mensagem = '<span style="color:#F24f00;">Obesidade Grau I</span>'
            }else{
                //Obesidade II e III
                img.setAttribute('src','mas-GGG.png')
                mensagem = '<span style="color:#D12100;">Obesidade Grau II ou III. Consulte a tabela</span>'
            }
        }else if (fsex[1].checked){
            gen = 'Mulher'
            if(rcorrigida <= 22.0){
                //abaixo do peso
                img.setAttribute('src','fem-p.png')
                mensagem = '<span style="color:#008CCA;">Abaixo do peso</span>'
            }else if(rcorrigida < 24.9){
                //peso normal 
                img.setAttribute('src', 'fem-m.png')
                mensagem = '<span style="color:#119822;"> Peso na Média </span>'
            }else if(rcorrigida < 29.9){
                //Sobre peso
                img.setAttribute('src','fem-G.png')
                mensagem = '<span style="color:#f8af00;">Sobrepeso</span>'
            }else if(rcorrigida < 34.9){
                //Obesidade I
                img.setAttribute('src','fem-GG.png')
                mensagem = '<span style="color:#F24f00;">Obesidade Grau I</span>'
            }else{
                //obesidade II e III
                img.setAttribute('src','fem-GGG.png')
                mensagem = '<span style="color:#D12100;">Obesidade Grau II ou III. Consulte a tabela</span>'
            }
        }

    res.innerHTML = `Nome: ${Name.value} idade: ${ida.value} Resultado do IMC: ${rcorrigida} <br>${mensagem}`
    res.appendChild(img)
    }
   
   
}
function del(){
    let Name = document.getElementById('txtn')
    let ida = document.getElementById('txti')
    let Peso = document.getElementById('pes')
    let Altura = document.getElementById('alt')
    let res = document.getElementById('res')
    let fsex = document.getElementsByName('rsex')
    Name.value = ''
    ida.value = ''
    Peso.value = ''
    Altura.value = ''
    res.innerHTML = ''
    let img = document.getElementById('foto')
    img.remove()
    fsex[0].checked = false
    fsex[1].checked = false
}