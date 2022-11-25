const factorial = (n) => {

    let result = 1;
    while (n > 1) {
        result*=n;
        n-=1;
    }

    return result;
}


console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(5))