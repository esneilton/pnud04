import { Alimento } from "./atividade11/Alimento.js";
import { Bebida } from "./atividade11/Bebida.js";
import { PedidoBase } from "./atividade11/PedidoBase.js";

const pedido = new PedidoBase();
const agua = new Bebida("Agua", 1.3);

pedido.adicionarProduto(agua);
pedido.adicionarProduto(new Bebida("Cerveja", 13));
pedido.adicionarProduto(new Alimento("Picanha", 31));
console.log(pedido.getResumo());

pedido.removerProduto(agua);
console.log(pedido.getResumo());