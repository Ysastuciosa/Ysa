import Politico from "./Politico"

export default class Presidente extends Politico {
    private qtdMinistros: number

    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, qtdMinistros: number){
        super(nome, partido, "Federal", "Executivo", local, endereco, remuneracao)
        this.qtdMinistros = qtdMinistros
    }

    getQtdMinistros(): number{
        return this.qtdMinistros
    }

    setQtdMinistros(x: number): void{
        this.qtdMinistros = x
    }

    exerceMandato(): void{
        console.log(this.getNome()+" propõe, sanciona e veta leis e edita medidas provisórias.")
    }

    nomearMinistro(): string{
        return this.getNome()+" nomeou um Ministro de Estado."
    }

    exonerarMinistro(): string{
        return this.getNome()+" exonerou um Ministro de Estado."
    }

    comandarForcasArmadas(): string{
        return this.getNome()+" comanda as Forças Armadas."
    }

    representarPais(): string{
        return this.getNome()+" representou o país em um evento internacional."
    }

    enviarPPA(): string{
        return this.getNome()+" enviou ao Congresso o PPA nacional."
    }

    enviarLDO(): string{
        return this.getNome()+" enviou ao Congresso a LDO nacional."
    }

    enviarLOA(): string{
        return this.getNome()+" enviou ao Congresso a LOA nacional."
    }
}