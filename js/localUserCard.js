const user = {
    name: "Kyryl",
    age: 32,
    isOnline: false,
    friends: ["Mykhaylo", "Nazar", "Ksenia"],
    settings: {
        theme: "light",
        notifications: false
    }
}

const firstFriendName = user.friends[0];
const notificationsEnabled = user.settings.notifications;

console.table({
    userName: user.name,
    numFriends: user.friends.length,
    firstFriendName: firstFriendName,
    theme: user.settings.theme,
    notificationsEnabled: notificationsEnabled
})