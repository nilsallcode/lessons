# CRUD API Assignments

### **Easy**

**Task:** Using Express and Prisma, set up a `Song` model and endpoints to add a new song and retrieve all songs.

**Requirements:**
- Define a `Song` model with fields: `id`, `songName`, `artist`, and `genre`.
- Create a POST route on the path `/add-song` to add a new song.
- Create a GET route on the path `/get-songs` to retrieve all songs in the database.

Understood. Let's distinguish between the two assignments with different requirements and use cases.

### **Medium**

**Task:** Create a system where users can RSVP to specific events.

**Requirements:**

- Define two models: 
  - `Event` with fields: `id`, `eventName`, `description`, and `date`.
  - `RSVP` with fields: `id`, `eventId`, `userName`, `email`, and `attendanceStatus` (values: "Going", "Maybe", "Not Going").
  
- Create a POST route on the path `/add-RSVP` where users can RSVP for a specific event.
- Create a GET route on the path `/event-RSVPs/:eventId` to retrieve all RSVPs for a specific event, including the users' names and attendance statuses.

Of course. Here's another approach for a hard assignment:

### **Hard**

**Task:** Set up a system where teachers can assign homework to students, and students can mark them as completed.

**Requirements:**

- Define two models:
  - `Assignment` with fields: `id`, `title`, `description`, `dueDate`, and `assignedToStudent`.
  - `Completion` with fields: `id`, `assignmentId`, `studentName`, `dateCompleted`, and `notes`.
  
- Completions should relate to assignments in a one-to-many relationship, indicating that many students can complete a single assignment.
- Implement a POST route `/assign-homework` where teachers can assign a new assignment to a student.
- Implement a POST route `/mark-completed` where students can mark an assignment as completed, adding their completion notes.
- Implement a GET route `/completed-assignments/:assignmentId` to retrieve a list of students who have completed a specific assignment and their notes.
- Teachers sometimes get it wrong. Implement a PATCH route `/update-assignment/:assignmentId` allowing teachers to update the assignment details.  
- Implement a DELETE route `/delete-assigment/:assignmentId` allowing the teacher to remove assignments. Cascade all related completions: https://www.prisma.io/docs/concepts/components/prisma-schema/relations/referential-actions

---

If you have questions, don't hesitate to ask!

**Happy hacking!** 🧑‍💻

---
