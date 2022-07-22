function numerosTricky (numero) {
    let numberArray = []
    let numberToString = numero.toString();
    for (let element of numberToString) {
        numberArray.push(parseInt(element))
    };
    return numberArray
    
}

console.log(numerosTricky(10))
console.log(numerosTricky(931))
console.log(numerosTricky(193278))