var summation = function (num) {
    // Code here
    let sum1 = 0;
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum1 = i;
        sum = sum + sum1;

    }
    console.log(sum);
}

summation(5);