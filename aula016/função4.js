function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c // fat = fat * c
    }
    return fat // não esquecer que depois da ação colocar return para retornar o valor.
}
console.log(fatorial(5))