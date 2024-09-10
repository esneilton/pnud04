import { Estatistica } from "./atividade10/Estatistica.js";
import { Processo } from "./atividade10/Processo.js";

const processo = new Processo(0, 2, 1, "", new Date(), 0, new Date(), 180, "", "", 0, 0, 0);
console.log("Processo: " + processo.nr_processo);

const estatistica = new Estatistica(1, "task10", "", new Date(), new Date(), 120, "fluxo");
console.log("Estatistica: " + estatistica.id_estatistica);