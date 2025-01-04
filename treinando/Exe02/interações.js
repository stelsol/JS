function cal(){
    let num = document.getElementById('txtn')
    let res = document.getElementById('resp')

    if(num.value.trim()=== '' || Number(num.value) <= 0){
        alert('[ERROR] Informe um valor válido!!')
    } else {
        let nup = Number(num.value)
        let fat = 1
        let pass = ''

        for( let n = nup ; n > 0 ; n--){
            fat *= n
            if(n === 1){
                pass += `${n} = `
            }else{
                pass += `${n} X `
            }
        }
        res.innerHTML = `${nup}! ${pass} ${fat}`
        res.style.color = '#ff0000'
    }
}

function del(){
    let num = document.getElementById ('txtn')
    let res = document.getElementById ('resp')

    res.innerHTML = " "
    num.value = " "
}