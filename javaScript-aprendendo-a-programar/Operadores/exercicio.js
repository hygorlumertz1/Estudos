// O objetivo aqui é aplicar operadores aritméticos, lógicos e de comparação em situações práticas, como simulações de sistemas simples e validações de dados. Vamos lá!

// Tente realizar os seguintes exercícios:

// 1. Verificação de maioridade
// Crie uma variável idade.
// Exiba no console o resultado da expressão que verifica se a idade é maior ou igual a 18.

// 📌 Dica: o resultado deve ser true ou false.

const idade = 18;

if (idade >= 18) {
    console.log('A idade do usuário é', idade, 'anos, e ele é maior de idade.');
} else {
    console.log('A idade do usuário é', idade, 'anos, e ele é menor de idade.');
}

// 2. Situação do aluno
// Crie duas variáveis com notas de um aluno.
// Calcule a média e exiba no console o resultado da expressão que verifica se a média é maior ou igual a 7.

const notaUm = 1;
const notaDois = 10;

const media = (notaUm + notaDois) / 2;

if (media >= 7) {
    console.log('Aluno passou, media da nota:', media);
} else {
    console.log('Aluno reprovado');
}

// 3. Simulação de troco
// Crie uma variável valorCompra com 35.90 e valorPago com 50. Calcule e mostre o troco a ser devolvido.

const valorCompra = 35.90;
const valorPago = 50;

if (valorPago == valorCompra) {
    console.log('O valor pago é igual ao valor da compra, sem troco a receber');
    
} if (valorPago > valorCompra) {
    valorTroco = valorPago - valorCompra;
    console.log('Valor do troco a devolver R$', valorTroco.toFixed(2));
} else {
    valorRestante = valorCompra - valorPago;
    console.log('O valor da compra é maior que o valor pago, falta R$', valorRestante.toFixed(2), 'para concluir a compra');
}

// 4. Validação de senha
// Crie duas variáveis com senhas digitadas em momentos diferentes.
// Exiba no console o resultado da comparação que verifica se as senhas são iguais.

const senhaUm = 'a1a2a3';
const senhaDois = 'a1a2a3';

if (senhaUm == senhaDois) {
    console.log('As senhas são iguais.');
} else {
    console.log('As senhas são diferentes');
}

// 5. Controle de faltas
// Crie as variáveis totalAulas e faltas.
// Calcule o limite de faltas permitido (25% do total) e exiba no console o resultado da expressão que verifica se as faltas ultrapassam esse limite.

const totalAulas = 100;
const faltas = 26;

limiteFaltas = 100 * 0.25;

if (faltas > limiteFaltas) {
    console.log('O aluno ultrapassou o limite de faltas');
} else {
    console.log('Pode relaxar ainda não passou o limite de faltas')
}

// 6. Verificação de login
// Crie duas variáveis booleanas: temLogin e temSenha.
// Exiba no console o resultado da expressão lógica que verifica se ambas são verdadeiras.

const temLogin = true;
const temSenha = true;

if (temLogin && temSenha) {
    console.log('Login e senha estão corretos, acesso permitido');
} else {
    console.log('Login ou senha incorretos, acesso negado');
}

// 7. Valor negado
// Crie uma variável booleana chamada disponível. Mostre seu valor negado no console, ou seja, se estiver disponível, exiba que não está, e vice-versa.

const disponivel = true;

if (disponivel) {
    console.log('O produto está disponível');
} else {
    console.log('O produto não está disponível');
}

// 8. Condições compostas
// Crie duas variáveis numéricas.
// Exiba no console o resultado da expressão que verifica se:
// os dois números são pares e
// os dois números são iguais.
// 9. Calculadora de porcentagem
// Calcule quanto é 15% de 120 usando operadores matemáticos. Mostre a frase: "15% de 120 é igual a X."

const numeroUm = 4;
const numeroDois = 4;

if (numeroUm % 2 == 0 && numeroDois % 2 == 0) {
    console.log('Os dois números são pares');
} else {
    console.log('Pelo menos um dos números não é par');
}

if (numeroUm == numeroDois) {
    console.log('Os dois números são iguais');
} else {
    console.log('Os números são diferentes');
}

const porcentagem = (15 / 100) * 120;

console.log('15% de 120 é igual a', porcentagem);

// 10. Ordem de operações
// Escreva a expressão 2 + 3 * 5. Mostre o resultado e explique por que a multiplicação foi feita antes da soma.
const resultado = 2 + 3 * 5;

console.log('O resultado da expressão 2 + 3 * 5 é:', resultado);

// A multiplicação foi feita antes da soma devido à ordem de operações em matemática, que é definida por regras conhecidas como PEMDAS (Parênteses, Expoentes, Multiplicação e Divisão, Adição e Subtração). De acordo com essas regras, as operações de multiplicação e divisão são realizadas antes das operações de adição e subtração. Portanto, na expressão 2 + 3 * 5, a multiplicação (3 * 5) é calculada primeiro, resultando em 15, e depois a soma (2 + 15) é realizada, resultando em 17.  