import { doc, setDoc, arrayUnion } from "firebase/firestore";
import { firestore } from "../config";

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

async function sendMessage(roomCode, message) {
    try {
        await setDoc(doc(firestore, "chat-data", roomCode), {
            messages: arrayUnion({
                text: message,
                timestamp: new Date(),
            })
        }, { merge: true });
        return true;
    }
    catch (error) {
        console.error("Error sending message: ", error);
        return false;
    }
}

export { getMessageHint, sendMessage };