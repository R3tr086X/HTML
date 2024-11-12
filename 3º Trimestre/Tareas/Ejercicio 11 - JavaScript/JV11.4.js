let numero = parseInt(prompt("Inserte el número a invertir"));

function numeroInvertido(num) {
    let inv = 0;

    while (num > 0) {
        inv = (inv * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return inv;
}

let invertido = numeroInvertido(numero);
let esCapicua = numero === invertido;

document.write("El valor " + numero + " invertido " + invertido + "<br>");

if (esCapicua) {
    document.write("El número es capicúa.");
} else {
    document.write("El número no es capicúa.");
}