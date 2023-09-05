# E-Com Lets Build Assignments

### **Easy**

**Task:** Use the [Dummy JSON API](https://dummyjson.com/api) to fetch a list of user names and display them in a `UsersList` component.

Endpoint: `https://dummyjson.com/users`

**Requirements:**
- Use the `useEffect` hook with an empty dependency list to fetch the users when the component mounts.
- Display each user's name in the list.

### **Medium**

**Task:** Allow users to click on a name in the `UsersList` component to navigate to a `UserProfile` component where they can see detailed information of the user.

```jsx
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={UsersList} />
      <Route path="/user/:userId" component={UserProfile} />
    </BrowserRouter>
  );
}
```

**Requirements:**
- Implement dynamic routing to handle displaying details of individual users.
- The `UserProfile` component should display detailed information (like email, phone, and address) based on the `userId` from the route parameters.

### **Hard**

**Task:** Implement a `InteractionsContext` to track the number of user profiles visited by the current user. On the main users list page, show the count of profiles visited.

**Requirements:**
- Every time a user navigates to a `UserProfile`, increment the count in the `InteractionsContext`.
- Display the count of visited profiles on the main `UsersList` page.

---

If you have questions, don't hesitate to ask!

**Happy hacking!** 🧑‍💻

---
