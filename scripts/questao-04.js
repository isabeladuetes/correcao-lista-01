const temperaturasCelsius = [0, 10, 20, 30, 40];
const temperaturasConvertidas = [];
let contadorArray = 0;

// Fórmula: F = C * 9/5 + 32

// Varredura do array com laço de repetição
for (let i = 0; i < temperaturasCelsius.length; i++) {
    temperaturasConvertidas[contadorArray] = (temperaturasCelsius[i] *9) / 5 + 32;
    contadorArray++;
}

console.table(temperaturasCelsius);
console.table(temperaturasConvertidas);