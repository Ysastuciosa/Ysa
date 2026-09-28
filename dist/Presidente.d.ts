import Politico from "./Politico";
export default class Presidente extends Politico {
    private qtdMinistros;
    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, qtdMinistros: number);
    getQtdMinistros(): number;
    setQtdMinistros(x: number): void;
    exerceMandato(): void;
    nomearMinistro(): string;
    exonerarMinistro(): string;
    comandarForcasArmadas(): string;
    representarPais(): string;
    enviarPPA(): string;
    enviarLDO(): string;
    enviarLOA(): string;
}
//# sourceMappingURL=Presidente.d.ts.map