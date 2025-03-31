const num1 = 5;
const num2 = 10;

function addValues(){
    console.log(`the sum is : ${num1 + num2}`)
}

addValues()
//If we have a funcntion inside the module,
//The code will run even if it is not assigned a variable
//When you import a module, you actually invoke it.
//require invokes the code when there is a function that is executing
