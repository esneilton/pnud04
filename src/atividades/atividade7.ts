/**
 * a. Escreva uma função em TypeScript, que receba quatro notas de um aluno, calcule
 * e mostre a média aritmética das notas e a mensagem de aprovado ou reprovado,
 * considerando, para aprovação, média 7.
 */
console.log("---------- ATIVIDADE 7 - função 'média' ----------");
function fnMedia(nota1: number, nota2: number, nota3: number, nota4: number) {
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    console.log(`Média: ${media} -> ` + (media >= 7 ? "APROVADO" : "REPROVADO"));
}
fnMedia(1, 2, 3, 4);
fnMedia(7, 7, 8, 6);
fnMedia(10, 7, 8, 6);

/**
 * b. Uma empresa decide dar um aumento de 30% aos colaboradores com salários
 * inferiores a R$ 2.500,00. Escreva uma função em TypeScript, que receba o salário do
 * colaborador e mostre o valor do salário reajustado ou uma mensagem, caso ele não
 * tenha direito ao aumento.
 */
console.log("\n---------- ATIVIDADE 7 - função 'aumento' ----------");
function fnAumento(salario: number) {
    if (salario < 2500) {
        console.log(`Salário atual: ${salario}. Novo salário: ` + (salario * 1.3));
    } else {
        console.log(`Salário atual: ${salario}. Você não tem direito ao aumento`);
    }
}
fnAumento(1000);
fnAumento(2500);
fnAumento(3000);

/**
 * c. Escreva uma função em TypeScript, que receba o nome da categoria de natação,
 * em formato String, e mostre a faixa de idade permitida na categoria, de acordo com a
 * tabela a seguir:
 * +-------------+------------------+
 * |  Categoria  |       Idade      |
 * +-------------+------------------+
 * |  infantil   |     5 a 7 anos   |
 * |   juvenil   |     8 a 10 anos  |
 * | adolescente |    11 a 15 anos  |
 * |   adulto    |    16 a 30 anos  |
 * |   sênior    | Acima de 30 anos |
 * +-------------+------------------+
 */
console.log("\n---------- ATIVIDADE 7 - função 'idadeNatacao' ----------");
/*
enum CategoriaNatacao {
    INFANTIL, JUVENIL, ADOLESCENTE, ADULTO, SENIOR
}
*/
function fnIdadeNatacao(categoria: string) { //CategoriaNatacao
    let idade = null;
    switch(categoria) {
        case "infantil": idade = "5 a 7 anos"; break;
        case "juvenil": idade = "8 a 10 anos"; break;
        case "adolescente": idade = "11 a 15 anos"; break;
        case "adulto": idade = "16 a 30 anos"; break;
        case "sênior": idade = "Acima de 30 anos"; break;
        default: idade = "Categoria inválida!"; break
    }
    console.log(`Categoria: ${categoria}. ${idade}`);
}
fnIdadeNatacao("infantil");
fnIdadeNatacao("juvenil");
fnIdadeNatacao("adolescente");
fnIdadeNatacao("adulto");
fnIdadeNatacao("sênior");
fnIdadeNatacao("bebê");

/**
 * Escreva um programa em TypeScript, que contenha uma função chamada 
 * calculadora e que receba três parâmetros: dois números inteiros e uma String, que
 * representa a operação aritmética, a ser executada com os dois números. A função deve
 * executar a função aritmética, com os dois números informados, via parâmetro.
 */
console.log("\n---------- ATIVIDADE 7 - função 'calculadora' ----------");
function fnCalculadora(numero1: number, numero2: number, operacao: string) {
    let resultado = null;
    switch(operacao) {
        case "+": resultado = numero1 + numero2; break;
        case "-": resultado = numero1 - numero2; break;
        case "*": resultado = numero1 * numero2; break;
        case "/": resultado = numero1 / numero2; break;
        case "**":
        case "^": resultado = Math.pow(numero1, numero2); break;
    }
    console.log(`${numero1} ${operacao} ${numero2} = ${(resultado == null ? 'Operação inválida!' : resultado)}`);
}
fnCalculadora(1, 2, "+");
fnCalculadora(3, 4, "-");
fnCalculadora(5, 6, "*");
fnCalculadora(6, 3, "/");
fnCalculadora(3, 4, "**");
fnCalculadora(4, 3, "^");