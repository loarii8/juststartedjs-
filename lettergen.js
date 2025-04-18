
function generateRandomLetter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

console.log(generateRandomLetter());

function generateMultipleRandomLetters(count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += generateRandomLetter();
    }
    return result;
}

// Example usage: Generate and log 1 random letters
console.log(generateMultipleRandomLetters(1));
