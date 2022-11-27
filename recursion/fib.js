// const fib = (n) => {


//     if (n < 2) {
//         return n;
//     }

//     return fib(n-1) + fib(n-2);
// }

//O(2^n)

const fib = (n) => {

    

    if (n < 2) {
        return n;
    }

    // if (n === 2) {
    //     return 
    // }

    return 2*(fib(n-1)) - fib(n-3);
}


console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(50))
