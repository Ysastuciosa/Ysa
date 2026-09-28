import Politico from "./Politico";
export default class DeputadoEstadual extends Politico {
    private estado;
    private comissoes;
    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, estado: string, comissoes: string[]);
    getComissoes(): string[];
    addComissao(nome: string): void;
    exerceMandato(): void;
    votarPPA(): string;
    votarLDO(): string;
    votarLOA(): string;
    proporEmenda(): string;
    criarCPI(): string;
}
//# sourceMappingURL=DeputadoEstadual.d.ts.map