import { set } from "firebase/database";

async function checkNotificationPermission() {
  if (Notification.permission === "granted") {
    return true;
  } else if (Notification.permission === "denied") {
    return false;
  } else {
    await Notification.requestPermission();
    if (Notification.permission === "granted") {
      return true;
    } else {
      return false;
    }
  }
}

async function showNotification(title, body, pressentTime) {
  const permission = await checkNotificationPermission();
  if (permission) {
    console.log("Notification permission granted");
    const n = new Notification(title, {
      body: body,
      // icon: "path/to/icon.png",
    });
    n.onshow = function () {
        setTimeout(n.close.bind(n), pressentTime || 5000); // Close the notification after 5 seconds
    }
  } else {
    console.log("Notification permission denied");
  }
}

export { checkNotificationPermission, showNotification };