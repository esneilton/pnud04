/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */

// Importa o módulo child_process para executar comandos do terminal
const { exec } = require('child_process');

// process.argv captura os argumentos da linha de comando
const argumento = process.argv[2]; // O argumento passado na linha de comando

if (!argumento) {
  console.error("Por favor, forneça o número da atividade.");
  process.exit(1); // Sai com erro se o argumento não for fornecido
}

// Construir o caminho do script dinamicamente com base no argumento
const scriptPath = `dist/atividades/atividade${argumento}.js`;

// Executa o script Node.js dinamicamente construído
exec(`node ${scriptPath}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Erro ao executar o script: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout); // Mostra a saída do script
});
