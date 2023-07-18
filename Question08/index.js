


// print fibonacci series



function fibonacci(num1, num2){
    for(let i = 0; i < 10; i++) {
        let storedValue = num1 + num2;
        console.log(storedValue);
        num1 = num2;
        num2 = storedValue;
    }
}


fibonacci(0,1);