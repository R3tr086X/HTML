var arrayBidimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (var i = 0; i < arrayBidimensional.length; i++) {
    for (var j = 0; j < arrayBidimensional[i].length; j++) {
        document.write("Elemento en la posición [" + i + "][" + j + "]: " + arrayBidimensional[i][j]+"<br>");
    }
}