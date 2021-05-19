function minimumSwaps(arr) {
    var numOfSwaps =0;
    for(let i=0; i<arr.length;i++){
        if (arr[i] !== i+1){
            numOfSwaps++;
            let swap = arr[i];
            arr[i]= arr[swap-1];
            arr[swap-1]=swap;
            i--;
        }
    }  
    return numOfSwaps;
}
