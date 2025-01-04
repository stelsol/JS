function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res') // esta é uma segunda opção, a de cima e está fazem a mesma funcão//
   if( fano.value.length == 0 || Number(fano.value) > ano){//Essa validação garante que o usuário preencheu o campo de ano e que o valor informado não é maior que o ano atual.//
        window.alert('Verifique os dados e tente novamente!')
   } else{
       var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)//Aqui é calculada a idade subtraindo o ano de nascimento do atual!
       // res.innerHTML = `Idade calculada ${idade}` para testar o código//
       var genero = '' // gênero irá começar vazia
       var img = document.createElement('img')
       img.setAttribute('id','foto')
       if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'crih.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovh.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'adth.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoh.png')
            }
       }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'crim.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovm.png')
            }else if (idade <50){
                //adulto
                img.setAttribute('src', 'adtm.png')
            }else{
                //idoso
                img.setAttribute('src', 'idom.png')
            }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img) // isto irá adicionar o elemento que no caso é as imagens após detectar o gênero e idade.
   }
}