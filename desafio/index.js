function sorteioNumero() {
    let x = 0, acumulador = 0, numeroSorteado, msn, msnDois
    let ultimosSorteios = new Array(3).fill(0)
    let faseDoisPA = 0, faseTresPA = 0

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

        const elementAarrayIguais = arrayNumero
            .every(item => item === arrayNumero[arrayNumero.length - 1])

        msn = elementAarrayIguais ? `Fase 2: ${++faseDoisPA} Portas Aberta ` : `Fase 2: Tente de novo`

        //Fase 3
        
        const arrayIguais = ((arrayNumero.length === ultimosSorteios.length) && (arrayNumero
            .every((item, index) => item === ultimosSorteios[index])))
        
        ultimosSorteios = [...arrayNumero]
        
        msnDois = arrayIguais ? `Fase 3: Porta ${++faseTresPA} Aberta` : `Fase 3 - Tente novamente`
        x++
    }
    acumulador = (faseDoisPA + faseTresPA)

    return `${msn} \n${msnDois} \nAcumulador: ${acumulador}`
}

const obterSorteio = sorteioNumero()
console.log(obterSorteio);
