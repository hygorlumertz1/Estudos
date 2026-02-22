let nome = 'Hygor';

let idade = 25;

let altura = 1.70;

console.log('O tipo da variável nome é: ', typeof nome); // string

console.log('O tipo da variável idade é: ', typeof idade); // number

console.log('O tipo da variável altura é: ', typeof altura); // number

// O operador typeof é usado para verificar o tipo de uma variável em JavaScript. Ele retorna uma string indicando o tipo da variável, como "string", "number", "boolean", "object", "undefined", entre outros. No exemplo acima, nome é do tipo string, enquanto idade e altura são do tipo number.

let estaChovendo = false; // boolean só pode ser true ou false

console.log('O tipo da variável estaChovendo é: ', typeof estaChovendo); // boolean

// O tipo boolean representa um valor lógico que pode ser verdadeiro (true) ou falso (false). No exemplo acima, a variável estaChovendo é do tipo boolean e tem o valor false, indicando que não está chovendo.

let cidade; // undefined

console.log('O tipo da variável cidade é: ', typeof cidade); // undefined

// O tipo undefined indica que uma variável foi declarada, mas ainda não foi atribuída a um valor. No exemplo acima, a variável cidade foi declarada, mas não recebeu nenhum valor, então seu tipo é undefined.

let jaAprendeuJavaScript = null; // null

console.log('O tipo da variável jaAprendeuJavaScript é: ', typeof jaAprendeuJavaScript); // object

// O tipo null representa a ausência intencional de qualquer valor ou objeto. No exemplo acima, a variável jaAprendeuJavaScript foi atribuída ao valor null, indicando que ainda não se sabe se a pessoa aprendeu JavaScript ou não. Curiosamente, o operador typeof retorna "object" para o valor null, o que é considerado um comportamento estranho em JavaScript, mas é algo que deve ser lembrado ao trabalhar com esse tipo de dado.

let simbulo = Symbol('simbolo'); // symbol

console.log('O tipo da variável simbolo é: ', typeof simbulo); // symbol

// O tipo symbol é um tipo de dado primitivo que representa um valor único e imutável. Ele é usado principalmente para criar identificadores únicos para propriedades de objetos, garantindo que não haja conflitos entre elas. No exemplo acima, a variável simbolo é do tipo symbol e tem um valor único associado a ela, que é a descrição "simbolo".

//Possiveis tipos de variáveis em JavaScript:
// string - para texto
// number - para números
// boolean - para valores lógicos (true ou false)
// undefined - para variáveis declaradas, mas sem valor atribuído
// null - para representar a ausência intencional de valor
// symbol - para criar identificadores únicos