import Politico from "./Politico"

export default class DeputadoFederal extends Politico {
    private bancada: string

    constructor(nome: string, partido: string, local: string, endereco: string, remuneracao: number, bancada: string){
        super(nome, partido, "Federal", "Legislativo", local, endereco, remuneracao)
        this.bancada = bancada
    }

    getBancada(): string{
        return this.bancada
    }

    setBancada(x: string): void{
        this.bancada = x
    }

    exerceMandato(): void{
        console.log(this.getNome()+" legisla sobre o código penal, o código tributário e as leis trabalhistas e fiscaliza o presidente.")
    }

    votarPEC(): string{
        return this.getNome()+" votou uma PEC federal."
    }

    criarCPI(): string{
        return this.getNome()+" criou a CPI nacional."
    }

    votarPPA(): string{
        return this.getNome()+" votou o PPA nacional."
    }

    votarLDO(): string{
        return this.getNome()+" votou a LDO nacional."
    }

    votarLOA(): string{
        return this.getNome()+" votou a LOA nacional."
    }

    proporLeiComplementar(): string{
        return this.getNome()+" propôs uma lei complementar."
    }
}