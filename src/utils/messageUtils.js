import { doc, setDoc, arrayUnion } from "firebase/firestore";
import { auth, firestore } from "../config";

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
    console.log("Random hint index: ", randomIndex);
    console.log("Random hint: ", hints[randomIndex]);
    return hints[randomIndex];
}

async function sendMessage(roomCode, message, mentionList = [], reactions = [], medias = []) {
    try {
        await setDoc(doc(firestore, "group-data", roomCode), {
            messages: arrayUnion({
                author: auth.currentUser.uid,
                sender: auth.currentUser.displayName,
                text: message,
                timestamp: new Date(),
                mentionList: mentionList,
                reactions: reactions,
                medias: medias,
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