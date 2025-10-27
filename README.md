# script about "Advanced Todo List with filters and task detailing"

Create a Todo Manager application that has:

a page with a list of tasks;
a page with details of the selected task;
an "About" page;
saving data in localStorage.
Functionality
1. Home page (/)
   Displays a list of tasks.
   There is a form for adding a new task (input + “Add” button).
   Each task has:
   id
   title
   description
   status → "active" | "completed"
   createdAt
   User actions:
   ✅ Mark as completed / not completed
   🗑️ Delete task
   🔍 Go to the task details page (/task/:id)
2. Task details (/task/:id)
   Shows full information about the task:
   title
   description
   creation date
   status
   There is a “Back to list” button.
   It is possible to **edit