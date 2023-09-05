# Express with Prisma ORM Assignments

### **Easy**

**Task:** Initialize a new Express server integrated with Prisma. Create a model and then make an endpoint to retrieve all entries.

**Requirements:**
- Set up a Prisma schema with a model named `Entry` that has fields `id` (auto-incrementing), `title`, and `content`.
- Sync your schema with your database. 
- Implement a GET route on the path `/entries` that retrieves all the entries from the database. (You can add entries through `npx prisma studio`).

### **Medium**

**Task:** On the same Express server, implement an endpoint that allows users to add a new entry.

**Requirements:**
- Implement a POST route on the path `/get-entries`. The request body should accept fields `title` and `content`.
- After adding the new entry to the database, return the created entry in the response.

### **Hard**

**Task:** Modify the existing model to include a new field. Implement an endpoint that fetches a specific entry by its ID.

**Requirements:**
- Update the Prisma model `Entry` to include a new field `date` (to store the creation date of the entry).
- Sync your database with the new schema change. 
- Implement a GET route on the path `/get-entry/:id` to retrieve a specific entry based on its ID.

https://www.prisma.io/docs

---

If you have questions, don't hesitate to ask!

**Happy hacking!** 🧑‍💻

---
