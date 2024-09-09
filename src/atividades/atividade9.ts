/**
 * a. Escreva uma função em TypeScript que receba um array, contendo 10 números, e os
 * ordene, utilizando o algoritmo BubbleSort;
 */
console.log("---------- ATIVIDADE 9 - função 'ordernar' ----------");
function fnOrdernar(numeros: number[]) {
    const numerosOrd = numeros.slice();
    let trocou: boolean;
    for (let i = 0; i < numeros.length; i++) {
        trocou = false;
        for (let j = 0; j < numeros.length - i - 1; j++) {
            if (numerosOrd[j] > numerosOrd[j + 1]) {
                [numerosOrd[j], numerosOrd[j + 1]] = [numerosOrd[j + 1], numerosOrd[j]];
                trocou = true;
            }
        }
        if(!trocou) break;
    }
    console.log(`Array informado: ${numeros} -> ordenado: ${numerosOrd}`);
}
fnOrdernar([]);
fnOrdernar([1]);
fnOrdernar([2,1]);
fnOrdernar([3,1,4,2]);

/**
 * b. Escreva uma função em TypeScript que receba um array, contendo 10 notas, e
 * contabilize quantas notas são maiores do que 7.
 */
console.log("\n---------- ATIVIDADE 9 - função 'count > 7' ----------");
function fnCountMaiorQue7(numeros: number[]) {
    let count = 0;
    for(let i=0; i<numeros.length; i++) {
        if(numeros[i] > 7) count++;
    }
    console.log(`Array informado: ${numeros} -> Maiores que 7: ${count}`);
}
fnCountMaiorQue7([]);
fnCountMaiorQue7([7]);
fnCountMaiorQue7([1,2,3,4,5,6,7,8,9]);

/**
 * Escreva uma função em TypeScript que receba um array, contendo o nome de cinco
 * frutas (String) e retorne um array, com a quantidade de caracteres do nome de cada
 * uma das frutas.
 */
console.log("\n---------- ATIVIDADE 9 - função 'count caracteres' ----------");
function fnCountCaracteres(frutas: string[]) {
    const frutasCount: number[] = [];
    for(let i=0; i<frutas.length; i++) {
        frutasCount[i] = frutas[i].length;
    }
    console.log(`Array informado: ${frutas} -> Quantidade caracteres: ${frutasCount}`);
}
fnCountCaracteres([]);
fnCountCaracteres(["goiaba"]);
fnCountCaracteres(["goiaba","cajú","manga"]);