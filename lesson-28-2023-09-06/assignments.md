# User Authentication Assignments

### **Easy**

**Task:** Develop a React application where users can log in with predefined accounts and post messages. All users can see all the messages but need to be logged in to post.

**Requirements:**

**Mocking Accounts:** Instead of a registration process, you can mock user accounts. For this, create an array of user objects in your backend, where each user object contains predefined email and password.

For example:
```javascript
const mockUsers = [
  { email: 'alice@example.com', password: 'password1' },
  { email: 'bob@example.com', password: 'password2' }
];
```
**Frontend (React):**
- A **Login Page** where users provide their email and password from the predefined list.
- A **Messages Board Page** where all messages are displayed and logged-in users can post new messages.

**Backend (Express):**
- A `POST /login` endpoint that checks the provided email and password against the `mockUsers` array. On successful match, return a JWT.
- A `GET /messages` endpoint to retrieve all messages.
- A `POST /messages` endpoint where authenticated users can post new messages.

### **Medium**

**Task:** Create a React application where users can log in and submit answers to quizzes. All users can see all the quizzes but need to be logged in to submit answers.

**Requirements:**

**Frontend (React):**
- A **Login Page** for user authentication.
- A **Quiz Page** displaying all available quizzes and allowing logged-in users to submit answers.

**Backend (Express):**
- A `POST /register` endpoint to sign up new users, hashing their password.
- A `POST /login` endpoint to authenticate users and return a JWT.
- A `GET /quizzes` endpoint to fetch all quizzes.
- A `POST /submit-answer` endpoint where authenticated users can submit their quiz answers.

### **Hard**

**Task:** Build a React application where any user can see all feedback submitted, but only logged-in users can post feedback.

**Requirements:**

**Frontend (React):**
- **Login & Register Pages** for user signup and authentication.
- **Feedback Display Page** showing all submitted feedback.
- **Submit Feedback Page** allowing logged-in users to submit feedback.

**Backend (Express):**
- A `POST /register` endpoint to register new users.
- A `POST /login` endpoint for user authentication.
- A `GET /feedback` endpoint to retrieve all submitted feedback.
- A `POST /submit-feedback` endpoint, accessible only to authenticated users, to post new feedback.

---

If you have questions, don't hesitate to ask!

**Happy hacking!** 🧑‍💻

---
