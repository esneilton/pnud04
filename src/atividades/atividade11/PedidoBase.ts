import { Pedido } from "./Pedido";
import { Produto } from "./Produto";

export class PedidoBase implements Pedido {
    produtos: Produto[] = []; 

    adicionarProduto(produto: Produto): void {
        this.produtos.push(produto);
    }
    removerProduto(produto: Produto): void {
        const index = this.produtos.findIndex(p => p.nome === produto.nome);
        if (index !== -1) {
            this.produtos.splice(index, 1);
        }
    }
    getTotal(): number {
        return this.produtos.reduce((total, p) => total + p.preco, 0);
    }
    getResumo(): string {
        return this.produtos.reduce((str, p) => `${str}\n[${p.categoria}] ${p.nome}: ${p.preco}`, "")
            + "\n-----------------------\n   TOTAL: " + this.getTotal();
    }

}