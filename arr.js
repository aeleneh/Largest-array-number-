function largestElement(arr) {
    return Math.max(...arr);
}
const num = [1, 3, 4, 5, 9];
const result = largestElement(num);
console.log("The largestElement in the array is: " + result);