function Adicionar(){
    //  var criada para pegar o elemento digitado pelo usuario.
    let inptarefa = document.getElementById('inptarefa')

    // var criada para fazer a conversão para o valor digitado pelo usuario.
    let Tarefa = inptarefa.value
    //Esta var é para exibir as mensagens que estão sendo declaradas a baixo
    let mensagem = document.getElementById('mensagem')
   
    //aqui ele avalia se o input está vazio se estiver ele emite um alerta!
    if(Tarefa.trim() === ''){
        alert('Adicione uma tarefa ')
        let msgerror = "Digite uma tarefa para adicionala a sua lista"
        mensagem.textContent= msgerror
        mensagem.style.color ="#a34743" 

        // se não ele roda os comandos abaixo
    } else{
            // mensagem que irá aparecer após adicionar as tarefas.(Aparece apenas uma vez)
            let mensagemsucesso = "Tarefa adicionada com sucesso!"
            // Ele exibe a mensagem criada acima no paragrafo.
            mensagem.textContent = mensagemsucesso;
            mensagem.style.color ="#28a745" 
            //aqui está pegando o ul para criar a lista
            let listatf = document.getElementById('listatf')
            // Aqui está adicionando um li dentro do ul toda vez que o usuario adicionar uma tarefa.
            let Newtarefa = document.createElement("li")
            //aqui é como será exibido a atividade
            Newtarefa.textContent = Tarefa
            // por fim, aqui é as lis, está é a lista final que ira aparecer toda vez que o usuario adicionar uma tarefa
            listatf.appendChild(Newtarefa)
        
        }
//Limpa o input do usuario e coloca o foco no mesmo após esta limpeza
inptarefa.value = ""
inptarefa.focus()
}