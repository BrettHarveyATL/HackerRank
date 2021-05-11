function jumpingOnClouds(c) {
    var i=0;
    var jumps=0;
    while( i < c.length){
        console.log(`I = ${i} jumps=${jumps}`)
        if(c[i+1]==0 && c[i+2]==0 && c[i] != 1){
            console.log("if")
        jumps++;
        i = i+2
        }
        else if(c[i+1]==0){
            console.log("else if")
            jumps++;
            i++
        }
        else{
        console.log("else")
        i++;
        }
    }
    return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]))