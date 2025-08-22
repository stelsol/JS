function criandodiv(){
    let conteudo2  = document.querySelector('.main-container')
    let div1 = document.createElement('div')
    div1.classList.add('main-div1')

    const tag2 = [
        {tag:'img', src:'imagens/diariosdeumaapotecaria.webp',alt:'capa',classe:'main-cartaz'}
    ]

    const img = document.createElement(tag2[0].tag) // isto é a mesma coisa que const img = document.createElement("img"), estamos aproveitando apenas que construimos um array para continuar com o mesmo modelo.
    img.src = tag2[0].src
    img.alt = tag2[0].alt
    img.className = tag2[0].classe
    div1.appendChild(img)

    conteudo2.appendChild(div1) // o erro era que eu estava pegando a div mas ela ainda não estáva criada por estar lá em baixo, com ela aqui a div 1 já é criada e posso utilizala.

    function div3interna(){
        let conteudo3 = document.querySelector('.main-div1')// criei a div um mas ela tem class, entao deve ser a classe aqui chamando
        let div3 = document.createElement('div')
        div3.classList.add('main-div3')

        const tag3 = [
            {tag:'span',classe:'material-symbols-outlined',texto:'star'}

        ]
        for(let i = 0; i < 5 ; i++){
            const star = document.createElement(tag3[0].tag)
            star.className = tag3[0].classe
            star.textContent = tag3[0].texto
            div3.appendChild(star)
        }
        conteudo3.appendChild(div3)
    }
    div3interna()
    
}
criandodiv()

function criandotag(){
    let container1 = document.querySelector('.main-container')
    let div2 = document.createElement('div')
    div2.classList.add('main-div2')
    const conteudo = [
        {tag:'p',texto:'Na antiga capital imperial da China, Maomao, uma jovem criada no distrito das flores e filha de um talentoso boticário, vê sua vida mudar drasticamente quando é levada à força para trabalhar no interior do palácio. Sem escolha, ela passa a servir como empregada, mas sua curiosidade insaciável e seu vasto conhecimento em medicina e venenos logo a colocam em situações inesperadas. Quando mistérios começam a ameaçar a vida de nobres e concubinas, Maomao não consegue ignorar os enigmas ao seu redor. Com sua mente afiada e olhar atento, ela resolve casos que ninguém ousaria investigar, chamando a atenção de Jinshi, um enigmático e elegante oficial da corte. A partir desse encontro, Maomao se vê cada vez mais envolvida nas intrigas do palácio, entre segredos mortais, jogos de poder e conspirações que podem mudar o destino do império.  Entre o humor afiado da protagonista, suas habilidades únicas como apotecária e o suspense de cada mistério revelado, Diários de uma Apotecária se destaca como uma obra envolvente que mistura drama histórico, investigação e um toque de romance, conquistando fãs de diferentes estilos de anime.', classe:'cartas'}
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
