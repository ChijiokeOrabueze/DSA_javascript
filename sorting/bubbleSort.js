

const bubbleSort = (arr) => {


    let isSwapped = true;

    while(isSwapped) {
        let swapCounter = 0;
        for (i=0;i<arr.length-1;i++){
            if (arr[i]>arr[i+1]) {
                let reserve = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = reserve;
                swapCounter+=1;
            }
        }
        if (swapCounter === 0){
            isSwapped = false;
        }
    }

    return arr;
    
};

console.log(bubbleSort([-3,-8,6,-2,34,1,-300,-23]))

console.log(bubbleSort([1,0]))