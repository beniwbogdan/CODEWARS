function digitize(n) {
    //code here

    let myFunc = n => Number(n);
    let intArr = Array.from(String(n), myFunc);
    return intArr.reverse();

}
digitize(1234);