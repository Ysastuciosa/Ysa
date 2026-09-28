import Politico from "./Politico";
export default class Governador extends Politico {
    private qtdSecretarios;
    private estado;
    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, qtdSecretarios: number, estado: string);
    getEstado(): string;
    setEstado(x: string): void;
    exerceMandato(): void;
    gerirPoliciaMilitar(): string;
    administrarRodovias(): string;
    coordenarEducacaoSaude(): string;
    enviarPPA(): string;
    enviarLDO(): string;
    enviarLOA(): string;
}
//# sourceMappingURL=Governador.d.ts.map