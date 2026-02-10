// function declaration 
function sum(num1 , num2){  // These are called perameter
    const total = num1+ num2 ; 
    console.log(total)
}


// function expression 
const addition = function(num1, num2) {
    return num1+num2 ;
}

const result = addition(19,23); 
console.log(result) ; 


// arrow funciton 

const add2 = (num1 , num2) => {
    result = num1 + num2 ; 
    console.log(result) ; // no return needed in arrow function
}

// or 

const addd = (num1, num2) => num1 + num2 ; 