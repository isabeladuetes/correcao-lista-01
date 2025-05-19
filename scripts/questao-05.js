const precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
const precosComDesconto = [];
let contadorArrayPrecosDesconto = 0;
let preco = 0;
let desconto = 0;
let somaTotalPrecos = 0;
let somaTotalPrecosComDescontos = 0;
let perda = 0;
let mediaDescontos = 0;

// Varredura do array com laço de repetição
for (let i = 0; i < precos.length; i++) {
    preco = precos[i];
    if (precos[i] > 100) {
        desconto = precos[i] * 0.1;
        preco = precos[i] - desconto;
    }   
    precosComDesconto[contadorArrayPrecosDesconto] = preco;
    contadorArrayPrecosDesconto++;

    somaTotalPrecos += precos[i];
    somaTotalPrecosComDescontos += precosComDesconto[i];
}

perda = somaTotalPrecos - somaTotalPrecosComDescontos;
mediaDescontos = somaTotalPrecosComDescontos / precosComDesconto.length;

console.table(precos);
console.table(precosComDesconto);
console.log(`A loja vai perder R$ ${perda.toFixed(2)}`);
console.log(`A média dos valores com descontos é: R$ ${mediaDescontos.toFixed(2)}`);