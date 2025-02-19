/* Operadores Lógicos 

&& -> AND -> E -- Todas as Expressões precisam ser verdadeiras para retornar TRUE

Se todas as situações ou condições forem verdadeiras ai eleretorna true ou funciona caso uma seja falsa ele já retorna false!
let idade = 25;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir!");
} else {
    console.log("Não pode dirigir.");
}

|| -> Or -> Ou

Ele precisa que pelo menos uma resposta nna comparação seja verdadeira, se ambas forem falsas ai retorna não pode comprar! ou o erro dependendo de como for usada.
let temDinheiro = false;
let temCartao = true;

if (temDinheiro || temCartao) {
    console.log("Pode comprar!");
} else {
    console.log("Não pode comprar.");
}



! -> Not -> Não 
let estaChovendo = false; -> Aqui ele está perguntando: está chovendo o false significa não!
só que o ! não muda na var e sim na hr da condição.
if (!estaChovendo) { // Aqui ele refaz a pergunta não está chovendo ?? quando o ! converte o false para true ele então confirma a pergunta que não está chovendo. se lá tivesse declarado true quando convertese seria false então quer dizer que etaria chovendo.
    console.log("Vamos ao parque!");
} else {
    console.log("Melhor ficar em casa."); // Esta mensagem será exibida
}
*/