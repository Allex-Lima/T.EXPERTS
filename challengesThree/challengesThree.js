const readline = require('readline-sync');
const numAleatorio = parseInt(Math.random() * (50 - 1) + 1);
//console.log(numAleatorio);

const numSorte = (palpite) => {
    if (palpite > numAleatorio) {
        return '\nTente um número MENOR!';
    } else if (palpite < numAleatorio) {
        return '\nTente um número MAIOR!';
    } else {
        return '\nParabéns você acertou!!!!';
    }
}

const jogo = () => {
    let i = 0;

    while (i <= 5) {
        console.log(`\nResta ${6 - i} tentativas`);
        const palpite = parseInt(readline.question(`Chute seu palpite ${i + 1}: `));
        i++;

        if (i > 5 && palpite !== numAleatorio) {
            console.log('\n\nNão foi dessa vez :)');
            console.log(`Número sorteado: ${numAleatorio}`);
            break;
        }

        const sugestao = numSorte(palpite);
        console.log(sugestao);

        if (palpite === numAleatorio) {
            break;
        }
    }
}

jogo();