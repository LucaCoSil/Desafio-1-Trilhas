// 1. Criando uma variável nome e exibindo seu valor
let nome = "Luca";
console.log(nome);

// 2. Criando variáveis idade e altura e exibindo os valores
let idade = 25;
let altura = 1.75;
console.log(`Idade: ${idade}, Altura: ${altura}`);

// 3. Calculando o preço com desconto
let preco = 50;
let desconto = 0.2;
let precoFinal = preco * (1 - desconto);
console.log(`Preço com desconto: ${precoFinal}`);

// 4. Verificando temperatura
let temperatura = 30;
if (temperatura > 25) {
    console.log("Está calor!");
} else {
    console.log("Está fresco!");
}

// 5. Verificando maioridade
if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// 6. Verificando nota do aluno
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// 7. Comparando dois números
let numero1 = 10;
let numero2 = 20;
if (numero1 === numero2) {
    console.log("Os números são iguais");
} else {
    console.log("Os números são diferentes");
}

// 8. Exibindo mensagem com concatenação
console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`);

// 9. Loop de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 10. Loop pedindo um número até que seja 5
let numero;
do {
    numero = parseInt(prompt("Digite um número: "));
} while (numero !== 5);

// 11. Tabuada do 7
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 12. Exibir números pares de 0 a 20
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// 13. Função para calcular área de um círculo
function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}
console.log(`Área do círculo: ${calcularAreaCirculo(5)}`);

// 14. Programa que soma dois números com comentários explicativos
// Declaração de variáveis
let num1 = 10;
let num2 = 20;

// Soma dos números
let soma = num1 + num2;

// Exibição do resultado
console.log(`A soma é: ${soma}`);

// 15. Refatoração do código
function somar(a, b) {
    return a + b;
}
let resultado = somar(10, 20);
console.log(`Resultado: ${resultado}`);
