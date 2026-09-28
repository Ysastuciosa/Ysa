export default abstract class Politico {
    private nome;
    private partido;
    private esfera;
    private poder;
    private nomeLocalTrabalho;
    private enderecoLocalTrabalho;
    private remuneracao;
    private projetos;
    constructor(nome: string, partido: string, esfera: string, poder: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number);
    getNome(): string;
    setNome(x: string): void;
    getPartido(): string;
    setPartido(x: string): void;
    getEsfera(): string;
    setEsfera(x: string): void;
    getPoder(): string;
    setPoder(x: string): void;
    getNomeLocalTrabalho(): string;
    setNomeLocalTrabalho(x: string): void;
    getEnderecoLocalTrabalho(): string;
    setEnderecoLocalTrabalho(x: string): void;
    getRemuneracao(): number;
    setRemuneracao(x: number): void;
    getProjetos(): string[];
    addProjeto(titulo: string): void;
    imprimeInfo(): void;
    abstract exerceMandato(): void;
}
//# sourceMappingURL=Politico.d.ts.map