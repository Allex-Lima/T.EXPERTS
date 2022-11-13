function sorteioNumero() {
    let x = 0, acumulador = 0, numeroSorteado, msn
    let ultimosSorteios = new Array(3).fill(0)

    while (x < 20) {
        let arrayNumero = new Array(3).fill(0)
        let i = 0

        while (i < 3) {
            numeroSorteado = parseInt(Math.random() * 3 + 1)
            if (arrayNumero.includes(0)) {
                arrayNumero.splice(i, 1, numeroSorteado)
            }
            i++
        }

        const elementsEquals = item => item === arrayNumero[arrayNumero.length - 1]
        const elementsAarraysAreEquals = arrayNumero.every(elementsEquals)

        //Fase 3
        const itemEquals = (item, index) => item === ultimosSorteios[index]
        const arraySizeEquals = arrayNumero.length === ultimosSorteios.length

        const arraysEquals = ((arraySizeEquals) && (arrayNumero.every(itemEquals)))
        
        ultimosSorteios = [...arrayNumero]

        const elementsAarraysAndArraysEquals = elementsAarraysAreEquals || arraysEquals
        msn = elementsAarraysAndArraysEquals ? `${++acumulador}` : `Tente de Novo`

        if (acumulador === 3) {
            return `Fim de jogo Você abriu ${acumulador} Portas.`
        }
        x++
    }

    return `${msn}`
}

const obterSorteio = sorteioNumero()
console.log(obterSorteio);
