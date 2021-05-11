function sockMerchant(n, ar) {
    var pair = 0;
    for (let i = 0; i < n; ++i) {
        var count = 0;
        for (var j = i; j < n; ++j) {
            if (ar[i] == ar[j] && ar[j]!="counted") {
                count++;
            }
            if (count % 2 == 0 && count!=0 && ar[j]!="counted") {
                pair++;
                ar[j]="counted"
                console.log(`pair ${pair}, count ${count}, i ${i} j ${j}`)
                break;
                
            }
        }

    }
    return pair;

}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))