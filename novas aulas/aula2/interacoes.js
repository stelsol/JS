function Adicionar(){
    //  var criada para pegar o elemento digitado pelo usuario.
    let inptarefa = document.getElementById('inptarefa')

    // var criada para fazer a conversão para o valor digitado pelo usuario.
    let Tarefa = inptarefa.value
   
    //aqui ele avalisa se o input está vazio se estiver ele emite um alerta!
    if(Tarefa.trim() === ''){
        alert('Adicione uma tarefa ')

        // se não ele roda os comandos abaixo
    } else{
            // mensagem que irá aparecer após adicionar as tarefas.(Aparece apenas uma vez)
            let mensagem = "Tarefa adicionada com sucesso!"
            // Ele exibe a mensagem criada acima no paragrafo.
            document.getElementById('mensagem').textContent = mensagem;

            //aqui está pegando o ul para criar a lista
            let listatf = document.getElementById('listatf')
            // Aqui está adicionando um li dentro do ul toda vez que o usuario adicionar uma tarefa.
            let Newtarefa = document.createElement("li")
            //aqui é como será exibido a atividade
            Newtarefa.textContent = Tarefa
            // por fim, aqui é as lis, está é a lista final que ira aparecer toda vez que o usuario adicionar uma tarefa
            listatf.appendChild(Newtarefa)
        
        }
inptarefa.value = ""
inptarefa.focus()
}