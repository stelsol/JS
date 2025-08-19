
function criandotag(){
    let container1 = document.querySelector('.main-container')
    let div2 = document.createElement('div')
    const conteudo = [
        {tag:'p',texto:'Em um palácio imperial cheio de intrigas, Maomao, uma jovem farmacêutica astuta e observadora, é sequestrada e vendida como serva no harém do imperador. Usando seu conhecimento de venenos, medicamentos e uma sagacidade afiada, ela resolve mistérios médicos e casos envenenamentos, chamando a atenção do eunuco-chefe Jinshi.', classe:'cartas'}
    ]

    for(let i = 0; i < conteudo.length; i++){
        let {tag,texto,classe} = conteudo[i]
        let tagcriada = document.createElement(tag)
        tagcriada.innerText = texto
        div2.appendChild(tagcriada)
        if(classe){
            tagcriada.classList.add(classe)
        }
    }
    container1.appendChild(div2)
    return div2
}
criandotag()
function criandodiv2(){
    let conteudo2  = document.querySelector('.main-container')
    let div1 = document.createElement('div')

    const tag2 = [
        {tag:'img', src:''}
    ]

    for(let i = 0; i < conteudo2.length; i++){

    }
}
//tivemos erros, digitamos alguns elementos errados! e nos perdemos um pouco na lógica do return da function
