let a = [1, 2, 3, 4, 5];

function myFilter(arr, f) {
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            ans.push(arr[i]);
        }
    }

    return ans;
}

console.log('Created filter function:');
console.log(a);
console.log(myFilter(a, isEven));
