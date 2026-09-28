import Politico from "./Politico";
export default class DeputadoFederal extends Politico {
    private bancada;
    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, bancada: string);
    getBancada(): string;
    setBancada(x: string): void;
    exerceMandato(): void;
    votarPEC(): string;
    criarCPI(): string;
    votarPPA(): string;
    votarLDO(): string;
    votarLOA(): string;
    proporLeiComplementar(): string;
}
//# sourceMappingURL=DeputadoFederal.d.ts.map