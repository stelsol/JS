function zeroaesquerda(num){
    return num >= 10 ? num : `0${num}` 
}
function hoje(horario){
    const dia = zeroaesquerda(horario.getDate())
   //const mes = zeroaesquerda(horario.getMonth()+1)
    const ano = zeroaesquerda(horario.getFullYear())
    const hr = zeroaesquerda(horario.getHours())
    const min = zeroaesquerda(horario.getMinutes())
    return `${semana(semanaconv)} - ${dia} de ${mesdescrito(Convert)} de ${ano} ${hr}:${min}`
    
}
function mesdescrito(Convert){
    switch (Convert) {
        case 0:
        return 'Janeiro'
        case 1:
        return 'Fevereiro'
        case 2:
        return 'Março'
        case 3:
        return 'Abril'
        case 4:
        return 'Maio'
        case 5:
        return 'Junho'
        case 6:
        return 'Julho'
        case 7:
        return 'Agosto'
        case 8:
        return 'Setembro'
        case 9:
        return 'Outubro'
        case 10:
        return 'Novembro'
        case 11:
        return 'Dezembro'
        default:
        return  ' '
    }
}

function semana(semanaconv){
    switch (semanaconv) {
        case 0:
            return 'Domingo'
        case 1:
            return 'Seguda-Feira'
        case 2:
            return 'Terça-Feira'
        case 3:
            return 'Quarta-Feira'
        case 4:
            return 'Quinta-Feira'
        case 5:
            return 'Sexta-Feira'
        case 6:
            return 'Sábado'
    
        default:
            return ' '
    }
}

const horario = new Date()
const Convert = horario.getMonth() // * Pega o mes de 0 a 11
const semanaconv = horario.getDay() // * pega o dia da semana de 0 a 6
const exibir = document.querySelector('#horadia')
//console.log(hoje(horario))

exibir.innerHTML = `${hoje(horario)}`