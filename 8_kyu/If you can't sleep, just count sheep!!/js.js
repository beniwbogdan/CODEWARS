var countSheep = function (num) {

    // for (let i = 1; i <= num; i++) {
    //     console.log(`${i} sheep...`);
    // }
    let counter = 1;
    let string;
    while (counter <= num) {
        console.log(`${counter} ship...`);
        let text = `${counter} ship...`;
        counter++;
        let arr = [text];
        string = arr.join();

    }
    console.log(string);

}
countSheep(4);