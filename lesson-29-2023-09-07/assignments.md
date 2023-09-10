# Authorization & Validation Assignments

### **Easy**

**Task:** Create an Express endpoint that validates the input of a registration form.

**Requirements:**

**Backend (Express):**
- A `POST /register` endpoint.
- Validate the email is in the correct format.
- Validate the password is at least 8 characters long and contains at least one number, one uppercase letter, and one lowercase letter.
- Check if a user with the given email already exists. If so, send an error message.

### **Medium**

**Task:** Create a React application integrated with an Express backend where users can save their personal notes.

**Requirements:**

**Frontend (React):**
- A **Login Page** where users provide their email and password.
- A **Notes Page** displaying notes specific to the logged-in user and allowing them to add new notes.

**Backend (Express):**
- A `POST /login` endpoint that returns a JWT for valid user credentials.
- A `GET /get-notes` endpoint that only returns notes created by the authenticated user.
- A `POST /add-note` endpoint to save a new note. This endpoint should associate the note with the authenticated user and validate the note content for appropriate length (e.g., between 10 to 500 characters).

### **Hard**

**Task:** Develop a full-stack application where users can manage tasks assigned to them. Users should only be able to view and manage tasks that are assigned to their account.

**Requirements:**

**Frontend (React):**
- **Login & Register Pages** for user signup and authentication.
- **Tasks Page** to display, add, and manage tasks specific to the logged-in user.

**Backend (Express):**
- A `POST /register` endpoint that validates user input and checks if the email is already in use.
- A `POST /login` endpoint that returns a JWT on successful validation.
- A `GET /get-tasks` endpoint that fetches tasks owned by or assigned to the authenticated user.
- A `POST /add-task` endpoint where users can add new tasks. This endpoint should validate the task content for appropriate length (e.g., between 5 to 200 characters) and associate it with the authenticated user.
- A `PATCH /update-task/:taskId` endpoint where users can edit the details of their tasks. Ensure that users can only update tasks they own / are assigned to.
- A `DELETE /delete-task/:taskId` endpoint where users can delete their tasks. Ensure that users can only delete tasks they own / are assigned to.

---

If you have questions, don't hesitate to ask!

**Happy hacking!** 🧑‍💻

---
