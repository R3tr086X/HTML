let cont = parseInt(1);

let suma = parseInt(1);

function factorial(num) {
    if (num==0) {
        return 1;
    } else {
        while (cont<num) {
            suma = (suma * cont) + suma;
            cont = cont + 1;
        }
        return suma;
    }
}

document.write(factorial(8));