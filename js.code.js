
function generateRandomNumber(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Both min and max must be numbers.');
    }
    if (min >= max) {
        throw new Error('Min value must be less than max value.');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let min = parseInt(prompt("Enter the minimum value:", "1"), 10);
let max = parseInt(prompt("Enter the maximum value:", "1000"), 10);

try {
    let randomNumber = generateRandomNumber(min, max);
    console.log(`Generated a random number between ${min} and ${max}: ${randomNumber}`);
} catch (error) {
    console.error(error.message);
}
