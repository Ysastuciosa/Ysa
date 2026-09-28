"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class Senador extends Politico_1.default {
    estado;
    anoEleito;
    constructor(nome, partido, local, endereco, remuneracao, estado, anoEleito) {
        super(nome, partido, "Federal", "Legislativo", local, endereco, remuneracao);
        this.estado = estado;
        this.anoEleito = anoEleito;
    }
    getEstado() {
        return this.estado;
    }
    getAnoEleito() {
        return this.anoEleito;
    }
    exerceMandato() {
        console.log(this.getNome() + " sabatina e aprova ministros do STF, legisla sobre leis federais e autoriza operações financeiras externas.");
    }
    aprovarAutoridade() {
        return this.getNome() + " aprovou uma autoridade de alto escalão.";
    }
    julgarCrime() {
        return this.getNome() + " julgou um crime de responsabilidade.";
    }
    representarEstado() {
        return this.getNome() + " representou os interesses de " + this.estado + ".";
    }
}
exports.default = Senador;
//# sourceMappingURL=Senador.js.map