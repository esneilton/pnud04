// Importa o módulo child_process para executar comandos do terminal
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import process from 'process';

// Transforma o exec em uma função baseada em promises
const execPromise = promisify(exec);

async function executarScript(scriptPath) {
  try {
    const { stdout, stderr } = await execPromise(`node ${scriptPath}`);
    if (stderr) {
      console.error(`Erro ao executar o script: ${stderr}`);
      process.exit(1);
    }
    console.log(stdout); // Mostra a saída do script
  } catch (err) {
    console.error(`Erro ao executar o script: ${err}`);
    process.exit(1);
  }
}

// process.argv captura os argumentos da linha de comando
const argumento = process.argv[2]; // O argumento passado na linha de comando

if (!argumento) {
  console.error("Por favor, forneça o número da atividade.");
  process.exit(1); // Sai com erro se o argumento não for fornecido
}

// Construir o caminho do script dinamicamente com base no argumento
const scriptPath = `dist/atividades/atividade${argumento}.js`;

executarScript(scriptPath);

// Executa o script Node.js dinamicamente construído
/*
exec(`node ${scriptPath}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Erro ao executar o script: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout); // Mostra a saída do script
});
*/