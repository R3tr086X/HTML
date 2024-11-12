// Script que crea una forma cuadrada de asteriscos en función de 2 valores

let alto = parseInt(prompt("Introduzca el alto del cuadrado"))

let ancho = parseInt(prompt("Introduzca el ancho del cuadrado"))

for (let index = 0; index < alto; index++) {
    document.write("" + "<br>")

    for (let i = 0; i < ancho; i++) {
        document.write("* ")
        
    }
    
}