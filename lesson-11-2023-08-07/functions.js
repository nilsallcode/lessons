const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function maths(num1, num2, operation) {
    
    if (operation === '+') {
        return num1 + num2;
    } else if (operation === '-') {
        return num1 - num2;
    } else if (operation === '/') {
        return num1 / num2;
    } else if (operation === '*') {
        return num1 * num2;
    }

}

rl.question("The first number: ", (firstNum) => {
    rl.question("Operation (+, -, /, *): ", (operation) => {
        rl.question("The second number: ", (secondNum) => {
            firstNum = parseInt(firstNum);
            secondNum = parseInt(secondNum);

            let sum = maths(firstNum, secondNum, operation);

            if (sum) {
                console.log("The sum is: " + sum);
            }

            rl.close();

        });
    });
});