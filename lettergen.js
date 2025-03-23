// Function to generate a random letter from the basic Latin alphabet
function generateRandomLetter() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

// Example usage: Generate and log a random letter
console.log(generateRandomLetter());

// Optional: Generate multiple random letters
function generateMultipleRandomLetters(count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += generateRandomLetter();
    }
    return result;
}

// Example usage: Generate and log 10 random letters
console.log(generateMultipleRandomLetters(10));
