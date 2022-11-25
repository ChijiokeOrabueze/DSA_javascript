const primality = (n) => {


    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n%i === 0) {
            return false;
        }
    }

    return true;
}

console.log(primality(4));
console.log(primality(5));
console.log(primality(6));
console.log(primality(16749));

// Big O = O(sqrt(n))