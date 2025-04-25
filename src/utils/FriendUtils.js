import { getUserData } from "./AccountUtils";

function addFriend(uid) {
    const userData = getUserData(uid);
    console.log(`Friend with UID ${uid} added.`);
}