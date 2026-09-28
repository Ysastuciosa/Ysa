import Politico from "./Politico"

export default class DeputadoEstadual extends Politico {
    private estado: string
    private comissoes: string[]

    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, estado: string, comissoes: string[]){
        super(nome, partido, "Estadual", "Legislativo", local, endereco, remuneracao)
        this.estado = estado
        this.comissoes = comissoes
    }

    getComissoes(): string[]{
        return this.comissoes
    }

    addComissao(nome: string): void{
        this.comissoes.push(nome)
    }

    exerceMandato(): void{
        console.log(this.getNome()+" legisla sobre assuntos de interesse do estado de "+this.estado+" e fiscaliza o governador.")
    }

    votarPPA(): string{
        return this.getNome()+" votou o PPA de "+this.estado+"."
    }

    votarLDO(): string{
        return this.getNome()+" votou a LDO de "+this.estado+"."
    }

    votarLOA(): string{
        return this.getNome()+" votou a LOA de "+this.estado+"."
    }

    proporEmenda(): string{
        return this.getNome()+" propôs uma emenda à constituição estadual."
    }

    criarCPI(): string{
        return this.getNome()+" criou uma CPI estadual."
    }
}