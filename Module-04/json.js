console.log("Exploring API") ; 


const person = {
    name: "Arman",
    food: "halim", 
    friends: ['sabit', 'saif', 'lamim'], 
    isRich: false , 
    money: 34000 ,
}

console.log(person.name) ; 
console.log(person.friends) ; 

const PERSON = JSON.stringify(person) ; 
console.log(PERSON) ; 
console.log(PERSON.name) ; 