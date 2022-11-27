const linearSearch = (arr, t) => {


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([12,2,3,4,5,6],7))
console.log(linearSearch([12,2,3,4,5,6],3))
console.log(linearSearch([12,2,3,4,5,6],9))
console.log(linearSearch([12,2,3,4,5,6],6))