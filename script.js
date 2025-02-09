// 1. Criar uma variável chamada nome e exibir seu valor
let nome = "SeuNome";
console.log(nome);

// 2. Criar variáveis idade e altura e exibir os valores
let idade = 25;
let altura = 1.75;
console.log(`Idade: ${idade}, Altura: ${altura}`);

// 3. Calcular o preço com desconto
let preco = 50;
let desconto = 0.2;
let precoFinal = preco * (1 - desconto);
console.log(`Preço com desconto: ${precoFinal}`);

// 4. Verificar temperatura
let temperatura = 30;
console.log(temperatura > 25 ? "Está calor!" : "Está fresco!");

// 5. Verificar maioridade
console.log(idade >= 18 ? "Você é maior de idade" : "Você é menor de idade");

// 6. Verificar nota
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// 7. Comparar dois números
let numero1 = 10;
let numero2 = 20;
console.log(numero1 === numero2 ? "Os números são iguais" : "Os números são diferentes");

// 8. Exibir nome e idade
console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`);

// 9. Loop de 1 a 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 10. Loop que pede número até digitar 5
let numero;
do {
    numero = parseInt(prompt("Digite um número:"));
} while (numero !== 5);

// 11. Tabuada do 7
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 12. Números pares de 0 a 20
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// 13. Calcular área de um círculo
function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}
console.log(`Área do círculo: ${calcularAreaCirculo(5)}`);

// 14. Soma de dois números
function somar(a, b) {
    return a + b;
}
console.log(`Soma: ${somar(10, 20)}`);

// 15. Refatorar código
function somarNumeros(x, y) {
    return x + y;
}
let resultado = somarNumeros(10, 20);
console.log(resultado);
