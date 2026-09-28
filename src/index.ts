import Presidente from "./Presidente"
import Governador from "./Governador"
import DeputadoFederal from "./DeputadoFederal"
import DeputadoEstadual from "./DeputadoEstadual"
import Senador from "./Senador"

// Presidente
let presidente = new Presidente("Luiz Inácio Lula da Silva", "PT", "Palácio do Planalto", "Brasília - DF", 44008.52, 39)

// Governadores: seu Estado (Pernambuco) e outro Estado (São Paulo)
let governadorPE = new Governador("Raquel Lyra", "PSD", "Palácio do Campo das Princesas", "Recife - PE", 33763.00, 24, "Pernambuco")
let governadorSP = new Governador("Tarcísio de Freitas", "Republicanos", "Palácio dos Bandeirantes", "São Paulo - SP", 23000.00, 30, "São Paulo")

// Deputados Federais: 3 de PE e 2 de SP
let depFed1 = new DeputadoFederal("Mendonça Filho", "União Brasil", "Câmara dos Deputados", "Brasília - DF", 46366.19, "Governista")
let depFed2 = new DeputadoFederal("Clarissa Tércio", "Republicanos", "Câmara dos Deputados", "Brasília - DF", 46366.19, "Oposição")
let depFed3 = new DeputadoFederal("Pedro Campos", "PSOL", "Câmara dos Deputados", "Brasília - DF", 46366.19, "Governista")
let depFed4 = new DeputadoFederal("Tabata Amaral", "PSB", "Câmara dos Deputados", "Brasília - DF", 46366.19, "Governista")
let depFed5 = new DeputadoFederal("Erika Hilton", "PSOL", "Câmara dos Deputados", "Brasília - DF", 46366.19, "Governista")

// Deputados Estaduais: 3 de PE e 2 de SP
let depEst1 = new DeputadoEstadual("Dani Portela", "PSOL", "Assembleia Legislativa de PE", "Recife - PE", 30934.00, "Pernambuco", ["Comissão de Direitos Humanos"])
let depEst2 = new DeputadoEstadual("Gleide Ângelo", "PSB", "Assembleia Legislativa de PE", "Recife - PE", 30934.00, "Pernambuco", ["Comissão de Segurança Pública"])
let depEst3 = new DeputadoEstadual("Débora Almeida", "PL", "Assembleia Legislativa de PE", "Recife - PE", 30934.00, "Pernambuco", ["Comissão de Educação"])
let depEst4 = new DeputadoEstadual("Itamar Borges", "MDB", "Assembleia Legislativa de SP", "São Paulo - SP", 30934.00, "São Paulo", ["Comissão de Agricultura"])
let depEst5 = new DeputadoEstadual("Delegada Graciela", "PL", "Assembleia Legislativa de SP", "São Paulo - SP", 30934.00, "São Paulo", ["Comissão de Segurança Pública"])

// Senadores: 2 de PE e 1 de outro Estado
let senador1 = new Senador("Humberto Costa", "PT", "Senado Federal", "Brasília - DF", 46366.19, "Pernambuco", 2018)
let senador2 = new Senador("Teresa Leitão", "PT", "Senado Federal", "Brasília - DF", 46366.19, "Pernambuco", 2022)
let senador3 = new Senador("Flávio Bolsonaro", "PL", "Senado Federal", "Brasília - DF", 46366.19, "Rio de Janeiro", 2018)


console.log("--- ENCAPSULAMENTO (get/set) ---")
console.log(presidente.getNome())
presidente.setNome("Lula")
console.log(presidente.getNome())
console.log(presidente.getEsfera()+" - "+presidente.getPoder())
console.log(depEst1.getEsfera()+" - "+depEst1.getPoder())


console.log("\n--- HERANÇA (imprimeInfo veio de Politico) ---")
presidente.imprimeInfo()
governadorPE.imprimeInfo()


console.log("\n--- POLIMORFISMO (cada um exerce o mandato do seu jeito) ---")
let politicos = [
    presidente, governadorPE, governadorSP,
    depFed1, depFed2, depFed3, depFed4, depFed5,
    depEst1, depEst2, depEst3, depEst4, depEst5,
    senador1, senador2, senador3
]
for(let p of politicos){
    p.exerceMandato()
}


console.log("\n--- ABSTRAÇÃO (Politico é abstrata, só existe através das filhas) ---")
console.log(presidente.nomearMinistro())
console.log(governadorPE.gerirPoliciaMilitar())
console.log(depFed1.votarPEC())
console.log(depEst1.criarCPI())
console.log(senador1.aprovarAutoridade())