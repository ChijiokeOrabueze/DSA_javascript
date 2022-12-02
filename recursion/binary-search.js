



const binarySearch = (arr, t, lIndex=0, rIndex = arr.length-1) => {

    // console.log(t);
    const mIndex = Math.floor((rIndex+lIndex)/2);

    if (lIndex > rIndex) {
        return -1;
    }

    if (arr[mIndex] === t) {
        return mIndex
    }

    if (arr[mIndex] < t) {
        return binarySearch(arr,t,mIndex+1,rIndex)
    }else {
        return binarySearch(arr,t,lIndex,mIndex-1)
    }
 
 
 }

 //0(logn)
 
 
 console.log(binarySearch([1],45))
 console.log(binarySearch([-5,2,4,6,10],6))
 console.log(binarySearch([1,2,4,6,10,13],2))
 console.log(binarySearch([1,2,4,6,10,13],10))