function sum(num1 , num2){  // These are called perameter
    const total = num1+ num2 ; 
    console.log(total)
}

sum(10, 20); // these are arguments means calling function

function sum(num1 = 0 , num2 = 0){  // Pre declared to avoid error
    const total = num1+ num2 ; 
    console.log(total)
}

sum(10); // these are arguments means calling function