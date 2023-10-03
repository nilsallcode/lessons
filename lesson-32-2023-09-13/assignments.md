# TanStack Query Assignments

### Easy

**Task:** Create a React component that fetches and displays a list of items from an API.

**Requirements:**
- Use Axios to fetch data.
- Implement `useQuery` to manage the fetching state (loading, error, and data).
- Display the data in a list format and show loading/error states to the user (e.g., loading spinner, error message).

### Medium

**Task:** Build upon the first assignment or create a new component where a user can add an item to the list by submitting a form.

**Requirements:**
- Implement `useMutation` to handle the API call for adding a new item to the server.
- Use Axios for making POST requests.
- Show loading, success, and error UI states.
- After a successful mutation, refetch the data using `useQuery` to ensure the UI is updated.

### Hard

**Task:** Create a full CRUD UI for items, allowing users to create, read, update, and delete items from a list.

**Requirements:**
- Use `useQuery` to fetch and display a list of items from an API.
- Implement a form where users can add a new item using `useMutation` and Axios.
- Allow users to update an item’s details using `useMutation` and Axios.
- Enable item deletion functionality with `useMutation` and Axios.
- Ensure the UI accurately represents the current server state at all times (e.g., refetching queries on mutations).
- Display appropriate loading and error states for all UI.
- (Bonus) Implement optimistic updates for a snappy UI experience.

---
If you have questions, don't hesitate to ask!

Happy hacking! 🧑‍💻
---
