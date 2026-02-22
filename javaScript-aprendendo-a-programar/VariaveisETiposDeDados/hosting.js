console.log('Minha idade atual é: ', idade);

//var idade = 25;

//let idade = 25;

// Variáveis declaradas com let e const não são "içadas" (hoisted) para o topo do escopo, ou seja, a declaração e a atribuição do valor permanecem no lugar onde foram escritas. Por isso, quando tentamos acessar a variável antes de sua declaração, ocorre um erro de referência (ReferenceError), pois a variável não existe até o ponto onde foi declarada.

idade = 25;

// Acessando a variável antes de sua declaração com var, let ou const

//var idade = 25; // Isso funciona, mas a variável é undefined até a linha onde é declarada
// por conta do hoisting o var parou de ser recomendado para declarar variáveis, pois pode causar confusão e erros difíceis de depurar. É recomendado usar let ou const para declarar variáveis, pois eles têm um comportamento mais previsível e seguro.

console.log('Minha idade atual é: ', idade);

// Variáveis declaradas com var são "içadas" (hoisted) para o topo do escopo, ou seja, a declaração da variável é movida para o topo do escopo, mas a atribuição do valor permanece no lugar onde foi escrita. Por isso, quando tentamos acessar a variável antes de sua declaração, ela existe, mas seu valor é undefined. Depois da declaração, a variável tem o valor atribuído normalmente.