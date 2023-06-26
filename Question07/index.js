// check if a string is palindrome 

// string.split('').reverse().join('');
function palindrome(string){
    if(string === string.split('').reverse().join('')){
        return `${string} is palindrome`;
    }else{
        return `${string} is not palindrome`;
    }
}

console.log(palindrome('vedic'));