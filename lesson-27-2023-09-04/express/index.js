const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

const port = 4000;

app.use(express.json());
app.use(cors());

app.get('/get-countries', async (req, res) => {

    const countries = await prisma.country.findMany();

    res.send(countries);

});

app.get('/get-country/:countryId', async (req, res) => {

    const countryId = parseInt(req.params.countryId);

    const country = await prisma.country.findUnique({
        where: { id: countryId }
    });

    res.send(country);

});

app.post('/add-country', async (req, res) => {

    const countryData = req.body;

    if (!countryData.name || !countryData.description || !countryData.imgUrl) {
        res.send({ error: "You've left empty fields." });
        return;
    }

    const country = await prisma.country.create({
        data: {
            name: countryData.name,
            description: countryData.description,
            imgUrl: countryData.imgUrl,
        }
    });

    res.send({ success: "Added " + country.name + " successfully!" });

});

app.delete('/delete-country/:countryId', async (req, res) => {

    const countryId = parseInt(req.params.countryId);

    const deletedCountry = await prisma.country.delete({
        where: { id: countryId }
    });

    res.send({ success: "Deleted " + deletedCountry.name + " from countries list." });

});

app.listen(port, () => {
    console.log("Server running on port ", port);
});