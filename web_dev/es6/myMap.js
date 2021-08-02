let a = [1, 2, 3, 4, 5];

function myMap(arr, f) {
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        ans.push(f(arr[i]));
    }

    return ans;
}

console.log('Created Map function:');
console.log(a);
console.log(myMap(a, double));
