const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

const port = 4000;

app.use(express.json());

app.get('/get-books', async (req, res) => {

    const books = await prisma.book.findMany({
        include: { reviews: true }
    });

    res.send(books);
});

app.get('/get-book/:bookId', async (req, res) => {

    const bookId = parseInt(req.params.bookId);
    const book = await prisma.book.findUnique({
        where: { id: bookId },
        include: { reviews: true }
    });

    res.send(book);

});

app.post('/add-book', async (req, res) => {

    const bookData = req.body;

    if (
        !bookData.title ||
        !bookData.author ||
        !bookData.description ||
        !bookData.published
    ) {
        res.send({ error: "You've left empty fields." });
        return; 
    }

    const book = await prisma.book.create({
        data: {
            title: bookData.title,
            author: bookData.author,
            description: bookData.description,
            published: new Date(bookData.published)
        }
    });

    res.send({ success: "Book has been added to library.", book })

});

app.patch('/update-book/:bookId', async (req, res) => {

    const bookId = parseInt(req.params.bookId);
    const bookData = req.body;

    if (
        !bookData.title ||
        !bookData.author ||
        !bookData.description ||
        !bookData.published
    ) {
        res.send({ error: "You've left empty fields." });
        return; 
    }

    const book = await prisma.book.update({
        where: { id: bookId },
        data: {
            title: bookData.title,
            author: bookData.author,
            description: bookData.description,
            published: new Date(bookData.published)
        }
    });

    res.send({ success: "Updated book " + book.title });

});

app.delete('/delete-book/:bookId', async (req, res) => {

    const bookId = parseInt(req.params.bookId);

    const deletedBook = await prisma.book.delete({
        where: { id: bookId }
    });

    res.send({ success: "Deleted book " + deletedBook.title });

});

app.post('/add-review/book/:bookId', async (req, res) => {

    const bookId = parseInt(req.params.bookId);
    const reviewData = req.body;

    if (!reviewData.name || !reviewData.text) {
        res.send({ error: "You've left empty fields" });
    }

    const review = await prisma.review.create({
        data: {
            name: reviewData.name,
            text: reviewData.text,
            book: {
                connect: {
                    id: bookId
                }
            }
        }
    });

    res.send({ success: "Added review." });

});

app.patch('/update-review/:reviewId', async (req, res) => {

    const reviewId = parseInt(req.params.reviewId);
    const reviewData = req.body;

    if (!reviewData.name || !reviewData.text) {
        res.send({ error: "You've left empty fields" });
    }

    const review = await prisma.review.update({
        where: { id: reviewId },
        data: {
            name: reviewData.name,
            text: reviewData.text
        }
    });

    res.send({ success: "Updated review." });
});

app.delete('/delete-review/:reviewId', async (req, res) => {
    
    const reviewId = parseInt(req.params.reviewId);
    const deletedReview = await prisma.review.delete({
        where: { id: reviewId }
    });

    res.send({ success: "Deleted review by " + deletedReview.name });

});

app.get('/get-review/:reviewId', async (req, res) => {

    const reviewId = parseInt(req.params.reviewId);

    const review = await prisma.review.findUnique({
        where: { id: reviewId }
    });
    
    res.send(review);

});

app.listen(port, () => {
    console.log("Server running on port", port)
});