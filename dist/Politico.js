"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Politico {
    nome;
    partido;
    esfera;
    poder;
    nomeLocalTrabalho;
    enderecoLocalTrabalho;
    remuneracao;
    projetos;
    constructor(nome, partido, esfera, poder, nomeLocalTrabalho, enderecoLocalTrabalho, remuneracao) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.nomeLocalTrabalho = nomeLocalTrabalho;
        this.enderecoLocalTrabalho = enderecoLocalTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = [];
    }
    getNome() {
        return this.nome;
    }
    setNome(x) {
        this.nome = x;
    }
    getPartido() {
        return this.partido;
    }
    setPartido(x) {
        this.partido = x;
    }
    getEsfera() {
        return this.esfera;
    }
    setEsfera(x) {
        this.esfera = x;
    }
    getPoder() {
        return this.poder;
    }
    setPoder(x) {
        this.poder = x;
    }
    getNomeLocalTrabalho() {
        return this.nomeLocalTrabalho;
    }
    setNomeLocalTrabalho(x) {
        this.nomeLocalTrabalho = x;
    }
    getEnderecoLocalTrabalho() {
        return this.enderecoLocalTrabalho;
    }
    setEnderecoLocalTrabalho(x) {
        this.enderecoLocalTrabalho = x;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    setRemuneracao(x) {
        this.remuneracao = x;
    }
    getProjetos() {
        return this.projetos;
    }
    addProjeto(titulo) {
        this.projetos.push(titulo);
    }
    imprimeInfo() {
        console.log(this.nome + "  " + this.partido + "  " + this.esfera + "  " + this.poder + "  " + this.nomeLocalTrabalho + "  " + this.enderecoLocalTrabalho + "  R$" + this.remuneracao);
    }
}
exports.default = Politico;
//# sourceMappingURL=Politico.js.map