
function getsemanaD(Convert){
    let diasemanat //!Só utiliza quando for o segundo  com Break!

/* // ! Utilizando apenas Return sem o uso do Break
    switch(Convert){
        case 0:
            return'Domingo'
        case 1:
            return'Segunda'
        case 2:
            return'Terça'
        case 3:
            return'Quarta'
        case 4:
            return'Quinta'
        case 5:
            return'Sexta'
        case 6:
            diasemanat = 'Sabado'
            return diasemanat //! Outra forma de retornar 
        default:
            return'Data invalida'
    }
*/
//! Utilizando o Break com return por ultimo 
            switch(Convert){
                case 0:
                    diasemanat ='Domingo'
                    break
                case 1:
                    diasemanat ='Segunda'
                    break
                case 2:
                    diasemanat ='Terça'
                    break
                case 3:
                    diasemanat ='Quarta'
                    break
                case 4:
                    diasemanat ='Quinta'
                    break
                case 5:
                    diasemanat ='Sexta'
                    break
                case 6:
                    diasemanat ='Sabado'
                    break
                default:
                    diasemanat = 'Data invalida'
                    break
            }
        return diasemanat
}
const Dsemana = new Date('2025-02-14 00:00:00')
const Convert = Dsemana.getDay() //! Estás suas primeiras consts são para pegar a data e o dia da semana 
const diasemanat = getsemanaD(Convert) //! Para armazenar a function dentro de uma variavel
console.log(Convert, diasemanat) //! Exibe o numero correspondente ao dia da semana e faz a conversão para texto assim falando qual dia realmente é!