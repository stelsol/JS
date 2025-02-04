//Utilizando functions para incrementar e exibir algo!

const Pessoa1 = {
    nome: 'Stella',
    snome: 'Rocha',
    idade:20,

    fala(){
        console.log(`${this.nome} ${this.snome} está informando que a idade atual dele é ${this.idade}`)
    },
    incrementoidade(){
        ++this.idade
    }
}
Pessoa1.fala()
Pessoa1.incrementoidade()
Pessoa1.fala()

/* 3 forma Simplificada
function criarp (nome, snome, idade){
    return{nome,snome,idade}
}
const Pessoa1 = criarp('Luan','Alberto',23)
const Pessoa2 = criarp('Vera','Lurdez',60)
console.log(Pessoa1, Pessoa2)

Segunda forma
function criarp (nome, snome, idade){
    return{
        nome:nome,
        snome:snome,
        idade:idade
    }
}
const Pessoa1 = criarp('Luan','Alberto',23)
const Pessoa2 = criarp('Vera','Lurdez',60)
console.log(Pessoa1, Pessoa2)



 Jeito básico de criar objeto
const Pessoa1 = {
    nome: 'Stella',
    snome: 'Rocha',
    idade:20
}
console.log(Pessoa1.nome)*/