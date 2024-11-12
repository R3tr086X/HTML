let alerta = ("Calculadora: " + " 1. Sumar " + " 2. Restar " + " 3. Multiplicar " + " 4. Dividir " + 
" 5. Menú")

function calculadora(a,b,c) {
    if (a==1) {
        let suma = b + c;
        return suma;

    } else if (a==2) {
        let restar = b - c;
        return restar;

    } else if (a==3) {
        let multiplicar = b * c;
        return multiplicar;

    } else if (a==4) {
        let dividir = b / c;
        return dividir;

    } else if (a==5) {
        return alerta;

    } 
}

document.write(calculadora(5,2,3))