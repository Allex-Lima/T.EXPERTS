
function sorteioNumero() {
    let x = 0, ultimosSorteios = [], numeroSorteado, msn
    
    while (x < 3) {
        let arrayNumero = new Array(3).fill(0)
        let i = 0

        while (i < 3) {
            numeroSorteado = parseInt(Math.random() * 3 + 1)
            if (arrayNumero.includes(0)) {
                arrayNumero.splice(i, 1, numeroSorteado)
            }
            i++
        }
        ultimosSorteios.push(arrayNumero)
        console.log(ultimosSorteios);
        for (let index = 0; index < arrayNumero.length - 1; index++) {
            if (arrayNumero[index] === arrayNumero[index + 1]) {
                msn = `${arrayNumero} - Porta Aberta`
            } else {
                msn = `${arrayNumero} - Tente Novamente`
                break
            }
        }
        x++
    }
    return msn
}

const x = sorteioNumero()
console.log(x);
