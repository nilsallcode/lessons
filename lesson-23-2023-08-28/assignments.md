# Express Basics Assignments


### **Easy**

**Task:** Set up an Express server and create a single endpoint that returns a "Hello, World!" message.

**Requirements:**
- Initialize a new Node.js application and install the necessary packages.
- Implement a GET route on the path `/hello` that responds with "Hello, World!".
- Ensure your server is listening on a specific port, and when accessed, it returns the expected message.

---

### **Medium**

**Task:** Extend the server to accept a name as a query parameter and return a personalized greeting.

```js
// Example endpoint: /greet?name=John
// Expected response: Hello, John!
```

**Requirements:**
- Implement a GET route on the path `/greet` that accepts a `name` query parameter.
- If a name is provided, return "Hello, [name]!".
- If no name is provided, return a generic "Hello!".

---

### **Hard**

**Task:** Create a basic API where users can submit notes (text-based) and retrieve all the submitted notes. 

**Requirements:**
- Implement a POST route on the path `/notes` that accepts a `note` in the request body. The note should be stored in an array or similar data structure.
- Implement a GET route on the path `/notes` that returns all the notes that have been submitted.
- Ensure that your server handles potential errors gracefully, such as malformed requests or empty notes.


---

If you have questions, don't hesitate to ask!

**Happy hacking!** 🧑‍💻

---
