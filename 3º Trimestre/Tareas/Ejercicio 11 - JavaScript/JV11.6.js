function siglo(num) {
    let sig = num / 100;

    if (num%100!==0) {
        sig = Math.floor (sig) + 1;
    }
    return sig;
}

document.write(siglo(1123));