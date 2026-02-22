const idade = 18;
const maiorDeIdade = idade >= 18; // true
const possuiCNH = false;
const podeDirigir = maiorDeIdade && possuiCNH; // AND

console.log('A pessoa pode dirigir? ', podeDirigir); // false

// O operador lógico AND (&&) retorna true se ambos os operandos forem verdadeiros, caso contrário, retorna false. No exemplo acima, a pessoa tem 15 anos, o que não é maior ou igual a 18, então a variável maiorDeIdade é false. Além disso, a pessoa não possui CNH, então a variável possuiCNH é false. Como ambos os operandos são false, o resultado da expressão maiorDeIdade && possuiCNH é false, indicando que a pessoa não pode dirigir.

const podeViajarSozinha = maiorDeIdade || possuiCNH; // OR

console.log('A pessoa pode viajar sozinha? ', podeViajarSozinha); // false

// O operador lógico OR (||) retorna true se pelo menos um dos operandos for verdadeiro, caso contrário, retorna false. No exemplo acima, a pessoa tem 15 anos, o que não é maior ou igual a 18, então a variável maiorDeIdade é false. Além disso, a pessoa não possui CNH, então a variável possuiCNH é false. Como ambos os operandos são false, o resultado da expressão maiorDeIdade || possuiCNH é false, indicando que a pessoa não pode viajar sozinha.

const precisaDeAcompanhante = !maiorDeIdade; // NOT

console.log('A pessoa precisa de um acompanhante? ', precisaDeAcompanhante); // true
