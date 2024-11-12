var tablaHTML = '<table border="1">';
tablaHTML += '<caption>Tabla</caption>';

let vertical = parseInt(prompt("Introducir el número de filas en vertical"));
let horizontal = parseInt(prompt("Introducir el número de filas en horizontal"));

for (var i = 1; i <= vertical+1; i++) {
    tablaHTML += '<tr>';

    for (var j = 1; j <= horizontal+1; j++) {
        if (i === 1 && j === 1) {
            tablaHTML += '<td></td>';
        } else {
            if (i === 1) {
                tablaHTML += '<th>' + (j - 1) + '</th>';
            } else {
                if (j === 1) {
                    tablaHTML += '<th>' + (i - 1) + '</th>';
                } else {
                    tablaHTML += '<td>' + (i - 1) + '-' + (j - 1) + '</td>';
                }
            }
        }
    }
    tablaHTML += '</tr>';
}

tablaHTML += '</table>';

document.write(tablaHTML);