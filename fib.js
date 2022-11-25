const fib = (n) => {

    const result = []
    for (var i = 0; i <= n; i++){
        if (i === 0 || i === 1) result.push(i)
        else result.push(result[i-1]+ result[i-2]);
    }

    console.log(result);
    return result;
    
}


fib(100);
fib(1000);
// fib(1);
// fib(2);