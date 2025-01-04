var agora = new Date() // Aprendemos a colocar o horario do sistema atual com está função nova!
var hr = agora.getHours()
console.log(`Agora são ${hr} hrs`)
    if(hr < 5){
        console.log('Boa Madrugada!')
    } else if(hr < 12) {
        console.log('Bom Dia!')
    }else if(hr < 19){
        console.log('Boa tarde!')
    } else{
        console.log('Boa noite')
    }

  /*  var hr = 12
console.log(`Agora são ${hr} hrs`)
    if(hr >= 1 && hr < 12){
        console.log('Bom Dia !')
    } else if(hr >= 12 && hr < 19) { 
        console.log('Boa Tarde!')
    }else {
        console.log('Boa noite !')
    }*/