import { collection, getDocs, setDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { firestore } from "../config";
import { auth } from "../config";

async function createGroupId() {
    const ID = crypto.randomUUID().slice(0, 8);
    console.log("Generated group ID: ", ID);
    const groups = getGroups();
    if (await groupExists(groups, ID)) {
        console.log("Group ID already exists, generating a new one.");
        return createGroupId();
    }
    return ID;
}

async function getGroupById(groupId) {
    try {
        const groups = await getGroups();
        const group = groups.find(group => group.id === groupId);
        if (group) {
            console.log("Group found: ", group);
            return group;
        } else {
            console.log("Group not found: ", groupId);
            return null;
        }
    } catch (error) {
        console.log("Error getting group: ", error);
        return null;
    }
}

async function getUserGroups(userId) {
    try {
        const userDoc = await getDocs(doc(firestore, "user-data", userId));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            const groups = userData.groups || [];
            console.log("User groups: ", groups);
            return groups;
        } else {
            console.log("User not found: ", userId);
            return null;
        }
    } catch (error) {
        console.log("Error getting user groups: ", error);
        return null;
    }
}

async function createGroup(name, description) {
    const groupId = await createGroupId();
    try {
        const owner = auth.currentUser.uid;
        await setDoc(doc(firestore, "group-list", groupId), {
            name: name,
            owner: owner,
            description: description,
            members: [],
            createdAt: new Date(),
            messages: [],
        }, { merge: false });
        await addMemberToGroup(groupId, owner);
        console.log("Group created with ID: ", groupId);
        console.log("owner: ", owner);
        return groupId;
    } catch (error) {
        console.log("Error creating group: ", error);
        return null;
    }
}

async function addMemberToGroup(groupId, user) {
    try {
        await setDoc(doc(firestore, "group-list", groupId), {
            members: arrayUnion(user),
        }, { merge: true });
        await setDoc(doc(firestore, "user-data", user), {
            groups: arrayUnion(groupId),
        }, { merge: true });
        console.log("Member added to group: ", user);
    } catch (error) {
        console.log("Error adding member to group: ", error);
    }
}

async function removeMemberFromGroup(groupId, user) {
    try {
        await setDoc(doc(firestore, "group-list", groupId), {
            members: arrayRemove(user),
        }, { merge: true });
        await setDoc(doc(firestore, "user-data", user), {
            groups: arrayRemove(groupId),
        }, { merge: true });
        console.log("Member removed from group: ", user);
    } catch (error) {
        console.log("Error removing member from group: ", error);
    }
}

async function deleteGroup(groupId) {
    try {
        await setDoc(doc(firestore, "group-list", groupId), {
            members: [],
            messages: [],
        }, { merge: true });
        console.log("Group deleted: ", groupId);
    } catch (error) {
        console.log("Error deleting group: ", error);
    }
}

async function getGroups() {
    try{
        const chatData = await getDocs(collection(firestore, "group-list"));
        return chatData.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    catch (error) {
        console.log("Error getting groups: ", error);
        return null;
    }
}

async function groupExists(groupId) {
    const groups = await getGroups();
    let exists = false;
    groups.forEach(group => {
        if (group.id === groupId) {
            exists = true;
        }
    });
    return exists;
}

export { createGroupId, getGroups, groupExists, createGroup, getGroupById, addMemberToGroup, removeMemberFromGroup, deleteGroup, getUserGroups };