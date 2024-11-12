let a = parseInt(prompt("Introduzca un número"));

let suma = parseInt(0);

for (let index = 1; index < a; index++) {
    if (a%index==0) {
        suma = suma + index;
    }
}

if (suma==a) {
    document.write("El número " + a + " es perfecto")

} else {
    document.write("El número " + a + " no es perfecto")
}