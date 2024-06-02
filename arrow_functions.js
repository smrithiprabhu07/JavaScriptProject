// Function Def using arrow
var add = (num1, num2) => num1 + num2;
var square = (num) => num * num;
var welcome = () => "Welcome to JS";
var greeting = (name) => "Hello " + name;
var power = (num1, num2) => Math.pow(num1, num2);

// Function call
console.log(add(5, 6));
console.log(welcome());
console.log(square(5));
console.log(greeting("Raj"));

// Prime num using arrow function


var isPrimeNum = (num) => {

    var isprime = true;

    if (typeof num !== 'number') {
        console.log("It is not a number");
    }
    else if (num === 1) {
        console.log("Number is not prime or composite");
    }
    else if (num > 1) {
        for (var i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isprime = false;
                break;
            }
        }
    } else {
        console.log("Number is negative number")
    
    }

    return isprime;
}

console.log(isPrimeNum(12));
