export class Processo {
    constructor(
        public id_processo: number,
        public nr_processo: number,
        public nr_processo_origem: number,
        public ds_complemento: string,
        public dt_inicio: Date,
        public id_jbpm: number,
        public dt_fim: Date,
        public nr_duracao: number,
        public nm_actor_id: string,
        public ds_nm_usu_cadastro_processo: string,
        public id_pk_tb_processo_pg: number,
        public id_sessao_pg: number,
        public nr_processo_tempo: number
    ) {}
}