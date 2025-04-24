const hints = [
    "Hi, how are you? ...",
    "What are you up to today? ...",
    "Do you have any plans for the weekend? ...",
    "Have you read any good books lately? ...",
    "What is your favorite movie? ...",
    "Never gonna give you up ...",
    "You want to play? Let's play! ..."
];

function getMessageHint() {
    let randomIndex = Math.floor(Math.random() * hints.length);
    return hints[randomIndex];
}

export default getMessageHint;