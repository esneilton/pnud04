import { Produto } from "./Produto";

export abstract class ProdutoBase implements Produto {
    constructor(
        public nome: string,
        public preco: number,
        public categoria: string)
    {}
}