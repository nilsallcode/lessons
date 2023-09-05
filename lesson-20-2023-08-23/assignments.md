# React Router & Contexts Assignments

### **Easy**

**Task:** Create an application with three pages: `Home`, `About`, and `Contact`. Use `BrowserRouter`, `Routes`, `Route`, and `Link` to navigate between these pages

**Requirements:**
- The main page (`/`) should display "This is the Home page".
- The about page (`/about`) should display "This is the About page".
- The contact page (`/contact`) should display "This is the Contact page".
- Use `Link` components to provide navigation between the pages.


### **Medium**

**Task:** Create a `ThemeContext` that holds a state for the current theme (light or dark). Wrap your main `App` component with this context provider. Display the current theme in a `Header` component using the `useContext` hook.

**Requirements:**
- The `ThemeContext` should have a `theme` state with values either "light" or "dark".
- The `Header` component should display the current theme.
- The `Header` component should use the `useContext` hook to access the theme.

### **Hard**

**Task:** Create a navigation bar using React Router's `Link` components. The navigation bar should have links to `Home` and `Settings` pages. On the `Settings` page, provide the ability to toggle the app's theme using the `ThemeContext`. 


**Requirements:**
- The main page (`/`) should display "Welcome to the Home page".
- The settings page (`/settings`) should display "Settings" and also show the current theme.
- Provide a button on the `Settings` page to toggle the theme using the context.
- The navigation bar should be visible on both pages.

**Tip:**

To change the theme in the CSS, dynamically change the element classes displayed.

Here's an example:
```jsx
<main className={themeDark ? 'bg-black' : 'bg-white' }>
```

Using Tailwind, this process is easier. Check it out:

https://tailwindcss.com/docs/dark-mode

---

If you have questions, don't hesitate to ask!

**Happy hacking!** 🧑‍💻

---
