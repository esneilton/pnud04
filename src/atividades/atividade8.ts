/**
 * a. Escreva uma função, em TypeScript, que calcule o somatório de todos os números pares, de 1 a 100
 */
console.log("---------- ATIVIDADE 8 - função 'soma pares' ----------");
function fnSomaPares() {
    //console.log("Somatório de pares (1 a 100): " + Array.from({ length: 50 }, (_, i) => (i+1)*2).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)); // 2550
    let soma = 0;
    for(let i = 2; i <= 100; i+=2) {
        soma += i;
    }
    console.log("Somatório de pares (1 a 100): " + soma);
}
fnSomaPares();

/**
 * b. Escreva uma função em TypeScript, que calcule e exiba a tabuada de um número fornecido
 */
console.log("\n---------- ATIVIDADE 8 - função 'tabuada' ----------");
function fnTabuada(numero: number) {
    console.log("Tabuada de: " + numero);
    let i = 1;
    while(i <= 10) {
        console.log(`${numero} x ${i} = ${numero * i++}`);
    }
}
fnTabuada(2);
fnTabuada(9);