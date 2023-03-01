// --------------------Questão 2-----------------------//
function fibonacci(QuantidadeValores) {

    // valores iniciais da sequência fibonacci;
    let anterior = 0;
    let atual = 1;
    let proximo = 1;

    for (let i = 0; i < QuantidadeValores; i++) { // executa loop para formar a sequência fibonacci;
        console.log(proximo)
        anterior = atual + proximo
        atual = proximo
        proximo = anterior

        if (QuantidadeValores == atual) { // avisa se o valor digitado pertence a sequência;
            console.log('pertence a sequência')
        }
    }
}
fibonacci(3) // Valor informado por meio do parametro da funçãoo 'fibonacci';

// --------------------Questão 3-----------------------//
let ValorFaturamento = {
    valorTotalMensal: [
        {
            "dia": 1,
            "valor": 22174.1664
        },
        {
            "dia": 2,
            "valor": 24537.6698
        },
        {
            "dia": 3,
            "valor": 26139.6134
        },
        {
            "dia": 4,
            "valor": 0.0
        },
        {
            "dia": 5,
            "valor": 0.0
        },
        {
            "dia": 6,
            "valor": 26742.6612
        },
        {
            "dia": 7,
            "valor": 0.0
        },
        {
            "dia": 8,
            "valor": 42889.2258
        },
        {
            "dia": 9,
            "valor": 46251.174
        },
        {
            "dia": 10,
            "valor": 11191.4722
        },
        {
            "dia": 11,
            "valor": 0.0
        },
        {
            "dia": 12,
            "valor": 0.0
        },
        {
            "dia": 13,
            "valor": 3847.4823
        },
        {
            "dia": 14,
            "valor": 373.7838
        },
        {
            "dia": 15,
            "valor": 2659.7563
        },
        {
            "dia": 16,
            "valor": 48924.2448
        },
        {
            "dia": 17,
            "valor": 18419.2614
        },
        {
            "dia": 18,
            "valor": 0.0
        },
        {
            "dia": 19,
            "valor": 0.0
        },
        {
            "dia": 20,
            "valor": 35240.1826
        },
        {
            "dia": 21,
            "valor": 43829.1667
        },
        {
            "dia": 22,
            "valor": 18235.6852
        },
        {
            "dia": 23,
            "valor": 4355.0662
        },
        {
            "dia": 24,
            "valor": 13327.1025
        },
        {
            "dia": 25,
            "valor": 0.0
        },
        {
            "dia": 26,
            "valor": 0.0
        },
        {
            "dia": 27,
            "valor": 25681.8318
        },
        {
            "dia": 28,
            "valor": 1718.1221
        },
        {
            "dia": 29,
            "valor": 13220.495
        },
        {
            "dia": 30,
            "valor": 8414.61
        }
    ]
}

function MenorValorDeFaturamento() {
    const valorTotalMensal = ValorFaturamento.valorTotalMensal;
    let valorMinimo = Infinity; // variável que armazenará o maior valor encontrado.

    // Encontra o valor mínimo
    for (let i = 0; i < valorTotalMensal.length; i++) {
        const valor = valorTotalMensal[i].valor;
        if (valor < valorMinimo && valor !== 0) {
            valorMinimo = valor;
        }
    }

    // Imprime o valor mínimo diferente de 0
    for (let i = 0; i < valorTotalMensal.length; i++) {
        const dia = valorTotalMensal[i].dia;
        const valor = valorTotalMensal[i].valor;
        if (valor === valorMinimo && valor !== 0) {
            console.log(`O Valor mínimo foi encontrado no dia: ${dia} com o Valor de: ${valor.toFixed(2)}`);
        }
    }
}

function MaiorValorDeFaturamento() {
    let valorMaximo = 0; // variável que armazenará o maior valor encontrado. Inicialmente, é atribuído o valor zero.
    let diaMaximo = 0; // variável que armazenará o dia correspondente ao maior valor encontrado. Inicialmente, é atribuído o valor zero.

    // O loop percorre cada objeto dentro do array 'valorTotalMensal' de 'ValorFaturamento'
    for (let i = 0; i < ValorFaturamento.valorTotalMensal.length; i++) {
        const valorAtual = ValorFaturamento.valorTotalMensal[i].valor; // atribui o valor do objeto atual à variável 'valorAtual'
        const diaAtual = ValorFaturamento.valorTotalMensal[i].dia; // atribui o dia do objeto atual à variável 'diaAtual'
        if (valorAtual > valorMaximo) { // verifica se o valor do objeto atual é maior do que o maior valor já encontrado
            valorMaximo = valorAtual; // atualiza o maior valor encontrado
            diaMaximo = diaAtual; // atualiza o dia correspondente ao maior valor encontrado
        }
    }

    // Imprime o resultado na tela.
    console.log(`O valor máximo foi encontrado no dia ${diaMaximo} com o valor de ${valorMaximo.toFixed(2)}`);
}

function CalcularMedia() {
    let somaValores = 0;
    let numValores = 0;
    
    for (let i = 0; i < ValorFaturamento.valorTotalMensal.length; i++) {
      if (ValorFaturamento.valorTotalMensal[i].valor !== 0) {
        somaValores += ValorFaturamento.valorTotalMensal[i].valor;
        numValores++;
      }
    }
    
    let mediaValores = somaValores / numValores;
    console.log(`A média dos valores diferente de 0 é ${mediaValores.toFixed(2)}`)
    
}

MenorValorDeFaturamento()
MaiorValorDeFaturamento()
CalcularMedia()


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

