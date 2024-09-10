export class Estatistica {
    constructor (
        public id_estatistica: number,
        public nm_task: string,
        public nm_node: string,
        public dt_inicio: Date,
        public dt_fim: Date,
        public nr_duracao: number,
        public ds_fluxo: string
    ) {}
}