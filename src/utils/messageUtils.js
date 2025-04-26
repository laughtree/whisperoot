import { doc, setDoc, arrayUnion, getDoc } from "firebase/firestore";
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
        const user = await getDoc(doc(firestore, "user-data", auth.currentUser.uid));
        if (!user.exists()) {
            console.error("User does not exist: ", auth.currentUser.uid);
            return false;
        }
        if (!message) {
            console.error("Message is empty");
            return false;
        }
        if (!roomCode) {
            console.error("Room code is empty");
            return false;
        }
        if (!auth.currentUser) {
            console.error("User is not logged in");
            return false;
        }
        const userData = user.data();
        await setDoc(doc(firestore, "group-data", roomCode), {
            messages: arrayUnion({
                author: auth.currentUser.uid,
                sender: userData.name || auth.currentUser.displayName || auth.currentUser.email,
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