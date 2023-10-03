# Advanced Hooks Assignments

### Easy

**Task:** Create a form with multiple input fields and a button to submit the form.

**Requirements:**
- Utilize `useRef` to manage focus between the input fields in the form.
- When the form is submitted (or a button is pressed), clear all the input fields and set the focus back to the first input field.
- Make sure to validate the form inputs and prevent the default form submission behavior.

### Medium

**Task:** Create a Todo list where users can add, remove, and toggle todos as complete/incomplete.

**Requirements:**
- Utilize `useReducer` to manage the state of the Todo list.
- Enable users to add new todos through an input field.
- Enable users to remove todos by clicking a delete button next to each todo item.
- Enable users to mark todos as complete or incomplete.
- Display a count of total, completed, and incomplete todos.
   
### Hard

**Task:** Create a complex form that accepts various input types (text, number, checkbox) with its own custom hook to manage state, validation, and submission.

**Requirements:**
- Implement a custom hook (`useForm` or similar) to manage form state, validation, and handle submission.
- The form should include at least:
    - Text Inputs
    - Number Inputs
    - File Input
    - Checkbox or Radio Inputs
    - A submit button
- Display appropriate validation messages for each field (e.g., "This field is required", "Enter a valid email address", etc.)
- Prevent form submission if validation fails, otherwise display the form data on the page or in the console.
- Ensure that the custom hook is reusable and can be implemented easily in other components.

---
If you have questions, don't hesitate to ask!

Happy hacking! 🧑‍💻
---
