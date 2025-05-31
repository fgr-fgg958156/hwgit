# Script about "User's personal card + friends list"

## First, created a user object that has the following properties:
1. name — string (username)
2. age — number (age)
3. isOnline — boolean value (whether online)
4. friends — array of 3 friends' names (strings)
5. settings — a nested object with fields:
6. theme — string ("light" or "dark")
7. notifications — булеве значення (чи увімкнено сповіщення)

### The second created a separate variable first FriendName, which gets the value of the first friend from the user.friends array.
### The third created a separate variable notificationsEnabled, which will receive the value from user.settings.notifications.

## Output to the console:
* User name
* Number of friends (not through a method, just .length)
* First friend's name
* What theme is enabled?
* Are notifications turned on?
