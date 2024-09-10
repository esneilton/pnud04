import { ProdutoBase } from "./ProdutoBase";

export class Alimento implements ProdutoBase {
    categoria = "Alimento";
    constructor(
        public nome: string,
        public preco: number)
    {}
}