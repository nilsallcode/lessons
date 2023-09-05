# Full-Stack Personal Journal Platform

No assignments this time! Just an all-out all-awesome project for you to complete. 

**Objective:** Develop a full-stack application where users can create journal entries, view past entries, update them, and delete them if necessary. You are welcome to use either the RPC or REST paradigm for your API.

**Frontend (React):**
1. **Homepage:** Display a list of all journal entries. Each entry should showcase the title and a brief snippet of the content. Options to view the full entry, edit, and delete should be accessible for each journal entry.
2. **Journal Detail Page:** When a user clicks on an entry from the homepage, they should be taken to a detailed page that displays the complete content of the journal entry.
3. **Add Entry Page:** Offer a form where users can write and submit a new journal entry, with fields to input the title and content.
4. **Edit Entry Page:** When a user selects the edit option for an entry, this page should pre-populate with the current details of that entry. Users should be able to modify the content and save the changes.
5. **Graceful Errors:** Handle errors and success messages gracefully, so that our users can better understand the system. 

**Backend (Express with Prisma):**
1. **Endpoints (Methods):**
   - `POST /get-entries`: Retrieve all journal entries.
   - `POST /get-entry/:id`: Retrieve a single journal entry by its ID from URL parameter.
   - `POST /add-entry`: Add a new journal entry using data in the request body.
   - `POST /update-entry/:id`: Update the details of a specific journal entry (specified by ID in URL parameter) using data in the request body.
   - `POST /delete-entry/:id`: Delete a specific journal entry specified by the ID in the URL parameter.

2. **Database Models:**
   - `JournalEntry`: Fields should include `id`, `title`, `content`, and `dateCreated`.

**Bonus Challenges:**
1. Implement a tagging system where each entry can be tagged with certain keywords, allowing for easier search and categorization.
2. Add the ability for users to search and filter entries by the title or entry tags. 

---

If you have questions, don't hesitate to ask!

**Happy hacking!** 🧑‍💻

---
