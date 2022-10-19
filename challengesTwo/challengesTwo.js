let sorteioHum, sorteioDois, contPar = 0, contImpar = 0, mensagem;

const sorteio = () => {
    const numeroSorteado = Math.random() * (6 - 1) + 1;
    return numeroSorteado.toFixed();
}

const somatorio = (sorteioHum, sorteioDois) => {
    const dHum = sorteioHum;
    const dDois = sorteioDois;

    return (dHum + dDois);
} 

const resultado = (soma) => {
    const resultado = soma % 2 === 0 ? 'PAR' : 'IMPAR';

    if (resultado === 'PAR') {
        ++contPar;
        if (contPar >= 4) {
            mensagem = 'Você ganhou!';
        } else {
            mensagem = 'Não foi dessa vez!';
        }
    }

    console.log(`\nSoma: ${soma}`);
    console.log(`resultado: ${resultado}\n`);

}

for (let index = 0; index < 6; index++) {
    sorteioDois = sorteio();
    sorteioHum = sorteio();

    const soma = somatorio(parseInt(sorteioHum), parseInt(sorteioDois));
    resultado(soma);
}
console.log(`Valor acumulado PAR: ${contPar}\n`);
console.log(mensagem);
