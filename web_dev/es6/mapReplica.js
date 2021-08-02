Array.prototype.myMap = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        let counter = callback(this[i]);
        newArray.push(counter);
    }
    return newArray;
};

let arr = [1, 2, 3];
let ansArray = arr.myMap(function (e) {
    return e * 2;
});
console.log(arr);
console.log(ansArray);
