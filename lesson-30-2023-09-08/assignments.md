# File Uploader Assignments

### **Easy**

**Task:** Create a system where users can upload images that will be displayed as potential desktop wallpapers.

**Requirements:**
1. **Frontend (React):**
    - Provide an input field for users to select an image.
    - A button to send the image to the server.
    - Display the uploaded image from the server response.
   
2. **Backend (Express):**
    - Receive and save the uploaded wallpaper image to a server directory.
    - Respond to the frontend with the path to find the image. (You do not need Prisma)
    - Handle potential errors such as incorrect file types or exceeding file size limits.

### **Medium**

**Task:** Create an application that allows users to upload, view, and delete documents (PDFs).

**Requirements:**
1. **Frontend (React):**
    - Input to select and upload a PDF file.
    - List all uploaded documents with the ability to view or delete them.
   
2. **Backend (Express):**
    - Store uploaded PDFs in a server directory.
    - Provide endpoints to upload, retrieve the list, view specific documents, and delete them.

### **Hard**

**Task:** Develop a gallery application where users can upload, label, and categorize their images.

**Requirements:**
1. **Frontend (React):**
    - Input to upload images.
    - Each image should be associated with a label (e.g., "Vacation", "Birthday", etc.).
    - Display images categorized by their labels. Users should be able to filter to view images from a particular category.
   
2. **Backend (Express):**
    - Store uploaded images in the server directory with metadata about their category/label.
    - Endpoints for:
        - Uploading images with their labels.
        - Retrieving images based on labels.
        - Deleting specific images.

---

If you have questions, don't hesitate to ask!

**Happy hacking!** 🧑‍💻

---