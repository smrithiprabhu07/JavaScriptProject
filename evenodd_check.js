var num = "100";
if (typeof num!=='number')
    {
        console.log("Not a number");
    }
else if (num % 2 === 0) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}