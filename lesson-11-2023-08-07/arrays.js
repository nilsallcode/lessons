const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(
        "Please enter your lists of numbers separated by a space (Each list separated by semicolon): ",
        (list) => {

            const lists = list.split(';');
            console.log(lists);

            for (let i = 0; i < lists.length; i++) {
                const numbers = lists[i].split(' ').map(Number);
                console.log(numbers);
                const sum = numbers.reduce((acc, num) => acc + num);
                const average = sum / numbers.length;

                console.log(`Average of List ${i + 1}: ${average}`);
            }

});
