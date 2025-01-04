function Carregar(){
    // por mais que os inputs sejam number os numeros que estão armazenados nas variaveis estão como string.
   let ini = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let pass = document.getElementById('txtp')
   let res = document.getElementById('res')

   if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
        //Não permite 0 e nem que os forms fiquem vazios, caso ocorra será acionado um alerta.
        alert('[ERRO!!] nenhum dado inserido')
   } else {
        res.innerHTML = 'Contando: <br>'
         //está próximas variaveis serão para fazer a conversão do texto para os numeros.
        let i = Number(ini.value)
        let f = Number(fim.value) 
        let p = Number(pass.value)
        if(p <= 0){
            alert('P = 0 é invalido trocando para p = 1')
            p = 1
        }
        if( i < f){
            //contagem crescente 
            for( let c = i ; c <= f ; c += p ){
                res.innerHTML += ` ${c}👉`
            }  
        } else {
            //contagem descrecente
            for(let c = i ; c >= f ; c -= p){
                res.innerHTML += ` ${c}👉 `
            }
        }
        res.innerHTML +=`🏁`
   }
}


// res.innerHTML = `${ini.value},${fim.value} e ${pass.value}` Teste para ver se está funcionando !!