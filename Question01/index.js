// check if a number is odd/even

console.log(evenOdd(70));


function evenOdd(int){
    if(int % 2 === 0){
        return `${int} is even`;
    }
    else{
        return `${int} is odd`
    }
}
