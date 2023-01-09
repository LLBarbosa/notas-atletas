function relacaoDeAtletas(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        let atleta = atletas[i];
        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas obtidas: ${atleta.notas}`)
        console.log(`Média válida: ${obterMedia(atleta.notas)}`);
        console.log("");


    }
};

function obterMedia(notas) {
    let soma = 0;
    notas = notas.sort();
    let notasComputadas = notas.slice(1, 4)
    notasComputadas.forEach(function (nota) {
        soma += nota;

    })
    let media = soma / notasComputadas.length

    return media;
}

let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

relacaoDeAtletas(atletas);



