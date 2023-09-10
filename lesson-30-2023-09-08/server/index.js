const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

const port = 4000;

app.use(express.json());
app.use(cors());
app.use("/images", express.static(__dirname + '/images'));
app.use(fileUpload());

app.post('/api/upload-picture', async (req, res) => {

    if (req.files === null) {
        res.send({ error: "No file uploaded." });
        return;
    }

    const file = req.files.file;

    file.mv(`${__dirname}/images/${file.name}`, async (error) => {

        if (error) {
            res.send({ error });
            return;
        }

        await prisma.image.create({
            data: {
                fileName: file.name,
                filePath: '/images/' + file.name
            }
        });

        res.send({ success: "Picture uploaded successfully." });

    });

});

app.get('/api/get-pictures', async (req, res) => {

    const pictures = await prisma.image.findMany();

    res.send({ pictures });

});

app.listen(port, () => {
    console.log("Server running on port ", port);
});