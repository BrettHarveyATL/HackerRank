// *
//  * Complete the 'countingValleys' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER steps
//  *  2. STRING path
//  */

function countingValleys(steps, path) {
    var count = 0;
    var valleyCount = 0;
    for(let i = 0; i < steps; i++){
        console.log(`Loop number${i}`);
        if(path[i]=='D'){
            console.log('D')
            if(count==0){
                valleyCount++
                count--
            }
            else{count--}
        }
        if(path[i]=='U'){
            console.log('U')
            count++
        }
    }
    return valleyCount
}

console.log(countingValleys(16,"DDUUUUDDDDUUUUDD"));