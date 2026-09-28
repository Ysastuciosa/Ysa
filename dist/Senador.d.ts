import Politico from "./Politico";
export default class Senador extends Politico {
    private estado;
    private anoEleito;
    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, estado: string, anoEleito: number);
    getEstado(): string;
    getAnoEleito(): number;
    exerceMandato(): void;
    aprovarAutoridade(): string;
    julgarCrime(): string;
    representarEstado(): string;
}
//# sourceMappingURL=Senador.d.ts.map