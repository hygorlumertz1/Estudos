console.log('Olá, mundo do node.JS!');

// Criando e atribuindo valores a variáveis

idade = 25;

console.log('A minha idade é: ', idade);

// Atualizando o valor da variável

idade = 26;

console.log('Agora minha idade é: ', idade);

// Regras para nomeacao de variaveis

// Não podemos iniciar o nome de uma variável com um número
// 1nome = 'Hygor'; // Isso é um erro

// Podemos usar um numero depois do primeiro caractere

// Não podemos usar sinais de pontuação, exceto o underline (_)

// Se quiser guardar a data do aniversário, podemos usar a variável data_de_aniversario ou dataDeAniversario, mas não podemos usar data-de-aniversario, pois o sinal de menos é um operador de subtração e isso causaria um erro.

// Variáveis são case-sensitive, ou seja, idade e Idade são variáveis diferentes

dataAniversario = '18 de Setembro';

console.log('Minha data de aniversário é: ', dataAniversario);



// Formas diferentes de criar variáveis

//1 - variavel global (sem var, let ou const) - não recomendado

nome = 'Hygor';

// essa é uma variável global, o que pode causar problemas em projetos maiores, pois pode ser sobrescrita acidentalmente em outras partes do código. Por isso, é recomendado usar var, let ou const para declarar variáveis.

//2 - variavel local (com var) - não recomendado

var sobrenome = 'Lumertz';

//3 - variavel local (com let) - recomendado

let cidade = 'Porto Alegre';

//4 - variavel local (com const) - recomendado para valores que não mudam

const pais = 'Brasil';

// Variáveis declaradas com var têm escopo de função, ou seja, são acessíveis em toda a função onde foram declaradas. Variáveis declaradas com let e const têm escopo de bloco, ou seja, são acessíveis apenas dentro do bloco onde foram declaradas (como dentro de um if ou for). Além disso, variáveis declaradas com const não podem ser reatribuídas, ou seja, seu valor não pode ser alterado depois de atribuído.

console.log('Meu nome é: ', nome);
console.log('Meu sobrenome é: ', sobrenome);
console.log('Minha cidade é: ', cidade);
console.log('Meu país é: ', pais); 