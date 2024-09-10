import { ProdutoBase } from "./ProdutoBase";

export class Bebida implements ProdutoBase {
    categoria = "Bebida";
    constructor(
        public nome: string,
        public preco: number)
    {}
}