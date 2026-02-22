// O objetivo aqui é praticar a criação, modificação e leitura de variáveis. Assim, você desenvolverá o hábito de usar console.log() para imprimir mensagens e entender como o código está funcionando. Vamos lá!

// Tente realizar os seguintes exercícios:

// 1. Boas-vindas personalizadas
// Crie uma variável chamada nome e atribua seu nome completo. Depois, use console.log() para exibir a mensagem: "Olá, [nome]! Seja bem-vindo(a) ao curso de JavaScript!"

let nome = 'Hygor Lumertz';

console.log('Olá, ', nome, '! Seja bem-vindo(a) ao curso de JavaScript!');

// 2. Cálculo de idade
// Crie duas variáveis: anoAtual e anoNascimento. Calcule a idade da pessoa subtraindo os valores e exiba no console: "Você tem [idade] anos."

let anoAtual = 2026;
let anoNascimento = 2000;

let idade = anoAtual - anoNascimento;

console.log('Você tem ', idade, ' anos.');


// 3. Mensagem de localização
// Crie três variáveis com os dados da sua localização: cidade, estado e pais. Em seguida, mostre no console: "Você está em Cidade - Estado, País."

let cidade = 'Porto Alegre';
let estado = 'Rio Grande do Sul';
let pais = 'Brasil';

console.log('Você está em ', cidade, ' - ', estado, ', ', pais, '.');

// 4. Tipo da variável:
// Crie uma variável chamada temCarteira com valor true ou false. Use console.log(typeof temCarteira) para mostrar o tipo dessa variável.

let temCarteira = true;

console.log('O tipo da variável temCarteira é: ', typeof temCarteira);

// 5. Simulação bancária simples:
// Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.
let saldo = 0;

console.log('Saldo inicial: ', saldo);

saldo += 200;
console.log('Após depósito de 200: ', saldo);

saldo -= 50;
console.log('Após saque de 50: ', saldo);

console.log('O saldo final é: ', saldo, '.');

// 6. Média de notas:
// Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.

let matematica = 8;
let portugues = 7;
let ciencias = 9;

let media = (matematica + portugues + ciencias) / 3;

console.log('A média final das notas é: ', media);

// 7. Reajuste de salário:
// Crie uma variável chamada salario com valor 3000. Calcule um aumento de 10% e mostre o novo salário com uma frase explicando o motivo.

let salario = 3000;

console.log('Salário inicial: ', salario);

let aumento = salario * 0.10;
let novoSalario = salario + aumento;

console.log('Após um aumento de 10%, o novo salário é: ', novoSalario, '.');

// 8. Contador de cliques:
// Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.

let cliques = 0;

console.log('Contador de cliques inicial: ', cliques);

cliques += 1;
console.log('Após 1º clique: ', cliques);

cliques += 1;
console.log('Após 2º clique: ', cliques);

cliques += 1;
console.log('Após 3º clique: ', cliques);

console.log('Total de cliques: ', cliques);

// 9. Constantes não podem ser alteradas
// Crie uma constante chamada PI com o valor 3.14. Tente alterar seu valor e observe o erro gerado. Depois, explique por que isso acontece.

const PI = 3.14;

console.log('O valor de PI é: ', PI);

// 10. Concatenando tipos diferentes
// Crie uma variável mensagem contendo uma string e outra numero contendo um número. Junte as duas em uma terceira variável e exiba o resultado e o tipo final no console usando typeof.

let mensagem = 'O número é: ';
let numero = 42;

let resultado = mensagem + numero;

console.log('Resultado da concatenação: ', resultado);
console.log('O tipo da variável resultado é: ', typeof resultado);
