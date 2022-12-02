

// const binarySearch = (arr, t) => {

    

//    let s = 0;
//    let mid = Math.floor((arr.length - (s+1))/2) + (s+1);
//    let e = arr.length - 1;
//    let len = arr.length;

//    while ((e - s + 1) > 0) {
//     if (e === s) {
//         if (arr[e] === t){
//             return e
//         }
//         break
//     }
//     if (arr[mid-1] === t){
//         return mid - 1;
//     }else if (arr[mid-1] > t) {
//         e = mid - 2;
//         // len = mid - s;
//         mid = Math.floor((e - s)/2) + (s+1);
//     }
//     s = mid;
//     mid = Math.floor((e - s)/2) + (s+1);


//    }

//    return -1;



// }


// console.log(binarySearch([1],1))
// console.log(binarySearch([1,2,4,6,10,13],4))
// console.log(binarySearch([1,2,4,6,10,13],9))
// console.log(binarySearch([1,2,4,6,10,13],21))





const binarySearch = (arr, t) => {

    
    let lIndex = 0;
    let rIndex = arr.length - 1;

    while (lIndex <= rIndex) {
        let midIndex = Math.floor((rIndex+lIndex)/2);

        if (arr[midIndex] === t) {
            return midIndex
        }
        if (arr[midIndex] < t) {
            lIndex = midIndex +1
        }else {
            rIndex = midIndex - 1
        }
    }
   
 
    return -1;
 
 
 
 }

 //0(logn)
 
 
 console.log(binarySearch([1],1))
 console.log(binarySearch([-5,2,4,6,10],7))
 console.log(binarySearch([1,2,4,6,10,13],9))
 console.log(binarySearch([1,2,4,6,10,13],21))