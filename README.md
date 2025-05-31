# Script about "Personal information + browser session"

Created a program that:
- Receives input from the user via prompt and confirm
- Creates a session object containing all the collected information
- Has a nested object and an array
- Uses all data types

## Steps:

1. Data collection via browser:
   - Prompted for name (prompt) → string
   - Asked for age → number (convert from string)
   - Asked if user wants to receive notifications (confirm) → boolean
   - Created a dummy userId as bigInt (you can just write it manually 1234567890123456789n)
   - Set the lastLogin field to null
   - Created a nickname field, but don't set a value (leave it undefined)
   - Added an array favoriteTech of three technologies (any)
   - Added a nested settings object with the fields:
   - theme: "dark" or "light"
   - autoLogin: false

2. I created a session object that will contain all this data.

3. Output:
   * alert with short information: "Hello, [name]! Your ID is: [userId]"
   * In console.log — the entire object
   * In console.log — the type of each field (via typeof)