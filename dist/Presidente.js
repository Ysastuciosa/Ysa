"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class Presidente extends Politico_1.default {
    qtdMinistros;
    constructor(nome, partido, local, endereco, remuneracao, qtdMinistros) {
        super(nome, partido, "Federal", "Executivo", local, endereco, remuneracao);
        this.qtdMinistros = qtdMinistros;
    }
    getQtdMinistros() {
        return this.qtdMinistros;
    }
    setQtdMinistros(x) {
        this.qtdMinistros = x;
    }
    exerceMandato() {
        console.log(this.getNome() + " propõe, sanciona e veta leis e edita medidas provisórias.");
    }
    nomearMinistro() {
        return this.getNome() + " nomeou um Ministro de Estado.";
    }
    exonerarMinistro() {
        return this.getNome() + " exonerou um Ministro de Estado.";
    }
    comandarForcasArmadas() {
        return this.getNome() + " comanda as Forças Armadas.";
    }
    representarPais() {
        return this.getNome() + " representou o país em um evento internacional.";
    }
    enviarPPA() {
        return this.getNome() + " enviou ao Congresso o PPA nacional.";
    }
    enviarLDO() {
        return this.getNome() + " enviou ao Congresso a LDO nacional.";
    }
    enviarLOA() {
        return this.getNome() + " enviou ao Congresso a LOA nacional.";
    }
}
exports.default = Presidente;
//# sourceMappingURL=Presidente.js.map