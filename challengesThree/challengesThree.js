const numAleatorio = parseInt(Math.random() * (10 - 1) + 1);

const numSorte = (palpite) => {
    if (palpite > numAleatorio) {
        return 'Tente um número menor!';
    } else if (palpite < numAleatorio) {
        return 'Tente um número maior!';
    } else {
        return 'Parabéns você acertou!!!!';
    }
}
