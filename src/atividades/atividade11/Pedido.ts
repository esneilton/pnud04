import { Produto } from "./Produto";

export interface Pedido {
    adicionarProduto(produto: Produto): void
    removerProduto(produto: Produto): void
    getTotal(): number
    getResumo(): string
}