let familia = parseInt(prompt("Introduzca el número de familiares"))

let coste = parseInt(0);

for (let index = 0; index < familia; index++) {
    let familiar = parseInt(prompt("Introduzca la edad del familiar"))
    document.write("Familiar con edad de " + familiar + "<br>" )

    if (familiar<4) {
        coste = coste + 0;
        
    } else if (familiar<12) {
        coste = coste + 40.20;

    } else if (familiar<16) {
        coste = coste +55;

    } else
        coste = coste + 52.60;
}

document.write("EL precio total de la familia con " + familia + " miembros es de: " + coste)