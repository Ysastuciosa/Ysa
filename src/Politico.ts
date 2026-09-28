export default abstract class Politico {
    private nome: string
    private partido: string
    private esfera: string
    private poder: string
    private nomeLocalTrabalho: string
    private enderecoLocalTrabalho: string
    private remuneracao: number
    private projetos: string[]

    constructor(nome: string, partido: string, esfera: string, poder: string, nomeLocalTrabalho: string, enderecoLocalTrabalho: string, remuneracao: number){
        this.nome = nome
        this.partido = partido
        this.esfera = esfera
        this.poder = poder
        this.nomeLocalTrabalho = nomeLocalTrabalho
        this.enderecoLocalTrabalho = enderecoLocalTrabalho
        this.remuneracao = remuneracao
        this.projetos = []
    }

    getNome(): string{
        return this.nome
    }

    setNome(x: string): void{
        this.nome = x
    }

    getPartido(): string{
        return this.partido
    }

    setPartido(x: string): void{
        this.partido = x
    }

    getEsfera(): string{
        return this.esfera
    }

    setEsfera(x: string): void{
        this.esfera = x
    }

    getPoder(): string{
        return this.poder
    }

    setPoder(x: string): void{
        this.poder = x
    }

    getNomeLocalTrabalho(): string{
        return this.nomeLocalTrabalho
    }

    setNomeLocalTrabalho(x: string): void{
        this.nomeLocalTrabalho = x
    }

    getEnderecoLocalTrabalho(): string{
        return this.enderecoLocalTrabalho
    }

    setEnderecoLocalTrabalho(x: string): void{
        this.enderecoLocalTrabalho = x
    }

    getRemuneracao(): number{
        return this.remuneracao
    }

    setRemuneracao(x: number): void{
        this.remuneracao = x
    }

    getProjetos(): string[]{
        return this.projetos
    }

    addProjeto(titulo: string): void{
        this.projetos.push(titulo)
    }

    imprimeInfo(): void{
        console.log(this.nome+"  "+this.partido+"  "+this.esfera+"  "+this.poder+"  "+this.nomeLocalTrabalho+"  "+this.enderecoLocalTrabalho+"  R$"+this.remuneracao);
    }

    abstract exerceMandato(): void
}