// find the largest number in an array

let array = [90, 7, 33, 65, 8, 1, 100]

function largestNum(array){
    let largest = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] > largest){
            largest = array[i];
        }
    }
    return largest;
}
console.log(largestNum([100, 500, 300, 9, 12]));