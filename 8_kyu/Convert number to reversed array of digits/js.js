function digitize(n) {
    //code here

    let myFunc = n => Number(n);
    let intArr = Array.from(String(n), myFunc);
    console.log(intArr);

}
digitize(1234);