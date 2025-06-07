// randomMessageGenerator

// Array of random messages
const messages = [
    "Nothing is impossible.",
    "To be... Or not to be...",
    "Pressure makes diamonds.",
    "Pain is temporary, however the gains are permanent.",
    "Seeing is believing.",
    "Life is a marathon and not a sprint.",
    "The road to success may have bends, potholes and obstacles.",
    "Everybody has greatness built within!"
];

// Function to generate a random message
function generateRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// Display the random message in the console

console.log(generateRandomMessage());