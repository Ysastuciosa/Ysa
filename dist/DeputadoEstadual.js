"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class DeputadoEstadual extends Politico_1.default {
    estado;
    comissoes;
    constructor(nome, partido, local, endereco, remuneracao, estado, comissoes) {
        super(nome, partido, "Estadual", "Legislativo", local, endereco, remuneracao);
        this.estado = estado;
        this.comissoes = comissoes;
    }
    getComissoes() {
        return this.comissoes;
    }
    addComissao(nome) {
        this.comissoes.push(nome);
    }
    exerceMandato() {
        console.log(this.getNome() + " legisla sobre assuntos de interesse do estado de " + this.estado + " e fiscaliza o governador.");
    }
    votarPPA() {
        return this.getNome() + " votou o PPA de " + this.estado + ".";
    }
    votarLDO() {
        return this.getNome() + " votou a LDO de " + this.estado + ".";
    }
    votarLOA() {
        return this.getNome() + " votou a LOA de " + this.estado + ".";
    }
    proporEmenda() {
        return this.getNome() + " propôs uma emenda à constituição estadual.";
    }
    criarCPI() {
        return this.getNome() + " criou uma CPI estadual.";
    }
}
exports.default = DeputadoEstadual;
//# sourceMappingURL=DeputadoEstadual.js.map