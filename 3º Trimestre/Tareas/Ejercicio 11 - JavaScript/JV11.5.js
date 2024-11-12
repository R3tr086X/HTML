function calificaciones(num) {
    if (num<=4) {
        return "suspenso"
        
    } else if(num==5) {
        return "aprobado"

    } else if(num==6) {
        return "bien"

    } else if(num==7 || num==8) {
        return "notable"

    } else if(num==9) {
        return "sobresaliente"

    } else if(num==10) {
        return "matrícula"
        
    } else {
        return "error"
    } 
}

document.write(calificaciones(6));