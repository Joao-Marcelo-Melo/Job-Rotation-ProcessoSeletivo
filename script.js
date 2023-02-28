// --------------------Questão 2-----------------------//
function fibonacci(QuantidadeValores) {

    // valores iniciais da sequência fibonacci;
    let anterior = 0;
    let atual = 1;
    let proximo = 1;

    for (let i = 0; i < QuantidadeValores; i++){ // executa loop para formar a sequência fibonacci;
        console.log(proximo)
        anterior = atual + proximo
        atual = proximo
        proximo = anterior

        if (QuantidadeValores == atual){ // avisa se o valor digitado pertence a sequência;
            console.log('pertence a sequência')
        }
    }
}
fibonacci(3) // Valor informado por meio do parametro da funçãoo 'fibonacci';

// --------------------Questão 3-----------------------//
let ValorFaturamento = { // faturamento mensal informado por um objeto JavaScript JSON;
    faturamentoMensalDiasConsecutivos: [
        3740, 4914, 941, 559, 3780, 0, 0, 1142, 190, 4237,
        2379, 4240, 0, 0, 2964, 1202, 3035, 1689, 3012, 0,
        0, 3835, 4628, 4744, 3474, 0, 0, 1942, 4134, 3620,

    ]
}

function MenorValorDeFaturamento(array) { // Função para informar menor valor != 0 da array 'faturamentoMensalDiasConsecutivos';
    const ArraySemZero = array.filter(array => array  !== 0) // criação de nova array sem zero;
    return Math.min.apply(null, ArraySemZero)
}

function MaiorDiaDeFaturamento(array) { // Função para informar maior valor da array 'faturamentoMensalDiasConsecutivos';
    return Math.max.apply(null, array)
}

function calcularMedia(array) { // Função para calcular média da array 'faturamentoMensalDiasConsecutivos';
    let soma = 0;
    const ArraySemZero = array.filter(array => array  !== 0)  // criação de nova array sem zero;
    for (let i = 0; i < ArraySemZero.length; i++) {
      soma += ArraySemZero[i];
    }
    const media = soma / ArraySemZero.length; // Calculo da média
    return media;
  }

console.log(MaiorDiaDeFaturamento(ValorFaturamento.faturamentoMensalDiasConsecutivos))
console.log(MenorValorDeFaturamento(ValorFaturamento.faturamentoMensalDiasConsecutivos))
const media = calcularMedia(ValorFaturamento.faturamentoMensalDiasConsecutivos)
console.log(media.toFixed(2))


// --------------------Questão 4-----------------------//
const faturamentoMensalPorEstado = { //  valor de faturamento informado pelo objeto 'faturamentoMensalPorEstado';
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const valorTotalMensal = Object.values(faturamentoMensalPorEstado).reduce((acc, cur) => acc + cur); // valor total mensal é calculado através do método 'reduce'; 

const percentuaisPorEstado = {}; // 'percentuaisPorEstado' é inicializado vazio e é preenchido através de um loop;
for (const estado in faturamentoMensalPorEstado) {
    const percentual = (faturamentoMensalPorEstado[estado] / valorTotalMensal) * 100; // o percentual de representação de cada estado é calculado;
    percentuaisPorEstado[estado] = percentual.toFixed(2);
}

console.log(percentuaisPorEstado);


// ---------------------Questão 5----------------------//
const string = 'String invertida feita por João Marcelo de Melo Bomfim';
let strInvertida = ''; // 'strInvertida' é inicializada vazia e é preenchida através de um loop;

for (let i = string.length - 1; i >= 0; i--) {
    strInvertida += string[i];
}

console.log(strInvertida);

