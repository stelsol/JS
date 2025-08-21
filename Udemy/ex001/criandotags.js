function criandodiv(){
    let conteudo2  = document.querySelector('.main-container')
    let div1 = document.createElement('div')
    div1.classList.add('main-div1')

    const tag2 = [
        {tag:'img', src:'imagens/diariosdeumaapotecaria.webp',alt:'capa',classe:'main-cartaz'},
        {tag:'span',classe:'material-symbols-outlined',texto:'star'}
    ]

    const img = document.createElement(tag2[0].tag) // isto é a mesma coisa que const img = document.createElement("img"), estamos aproveitando apenas que construimos um array para continuar com o mesmo modelo.
    img.src = tag2[0].src
    img.alt = tag2[0].alt
    img.className = tag2[0].classe
    div1.appendChild(img)
    for(let i = 0; i < 5 ; i++){
        const star = document.createElement(tag2[1].tag)
        star.className = tag2[1].classe
        star.textContent = tag2[1].texto
        div1.appendChild(star)
    }
    conteudo2.appendChild(div1)
}
criandodiv()

function criandotag(){
    let container1 = document.querySelector('.main-container')
    let div2 = document.createElement('div')
    div2.classList.add('main-div2')
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


//tivemos erros, digitamos alguns elementos errados! e nos perdemos um pouco na lógica do return da function
