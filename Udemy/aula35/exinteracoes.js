
const exibir = document.querySelector('.container')
let div = document.createElement('div')
const adicionar = [
    {tag: 'p', texto:'Paragrafo'},
    {tag: 'div', texto:'Div'},
    {tag: 'footer', texto:'Footer'},
    {tag: 'section', texto:'Section'},
    {tag: 'p', texto:'Todas as 4 tags criadas via JavaScript!'},
];
for(let i = 0; i < adicionar.length; i++){
    let{ tag, texto} = adicionar[i]
    let tagcriada = document.createElement(tag)
    tagcriada.innerText = texto;

    // Se for a última entrada do array e a tag for 'p', adiciona a classe
    if(i === adicionar.length -1) {
        tagcriada.classList.add('texto'); // nome da classe que você quiser
    }

    div.appendChild(tagcriada)
}
exibir.appendChild(div);

