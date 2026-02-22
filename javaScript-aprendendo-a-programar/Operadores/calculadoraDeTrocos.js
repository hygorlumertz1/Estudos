console.log('Bem-vindo à calculadora de trocos!');

// Variáveis para armazenar o valor total da compra e o valor pago pelo cliente
let valorTotal = 90.00; // Exemplo de valor total da compra
let valorPago = 100.00; // Exemplo de valor pago pelo cliente

// Calculando o troco
let troco = valorPago - valorTotal;

console.log('Valor total da compra: R$ ', valorTotal.toFixed(2));
console.log('Valor pago pelo cliente: R$ ', valorPago.toFixed(2));

// Verificando se o valor pago é suficiente para cobrir a compra
if (troco < 0) {
    console.log('Valor pago insuficiente. Faltam R$ ', Math.abs(troco).toFixed(2));
} else {
    console.log('O troco a ser devolvido é: R$ ', troco.toFixed(2));
}

// Explicação:
// Neste código, criamos uma calculadora de trocos simples. Primeiro, definimos o valor total da compra e o valor pago pelo cliente. Em seguida, calculamos o troco subtraindo o valor total do valor pago. Se o troco for negativo, significa que o cliente não pagou o suficiente, e mostramos quanto falta. Caso contrário, mostramos o valor do troco a ser devolvido ao cliente. O método toFixed(2) é usado para formatar os valores como moeda, com duas casas decimais.