import express from 'express';

const router = express.Router();

router.get('/hello-world', (req, res) => {
    res.send({message: "Hello, world!"});
});

router.get('/teams/epic', (req, res) => {
    res.send([
        {
            name: "49ers",
            location: "San Francisco"
        },
        {
            name: "Patriots",
            location: "Boston"
        }
    ]);
});

router.get('/teams/:teamName', (req, res) => {

    const team = req.params.teamName;

    if (team.toLowerCase() === 'arsenal') {
        res.send({message: team + " are by far the greatest team"});
    } else {
        res.send({message: team + " are ok i guess"});
    }

});

router.get('/fruits/:fruitId', (req, res) => {

    const fruitId = req.params.fruitId;

    let fruits = [
        "Apple",
        "Orange",
        "Banana"
    ];

    if (parseInt(fruitId) > fruits.length) {
        res.send({error: "Fruit does not exist"});
    } else {
        res.send({ fruit: fruits[fruitId - 1] });
    }

});

router.get('/meals', (req, res) => {
    
    let italianMeals = [
        "Risotto",
        "Pizza",
        "Lasagne"
    ];

    let globalMeals = [
        "Cheeseburger",
        "Aromatic Duck",
        "Djoloff",
    ];

    if (req.query.country !== "italy") return res.send(globalMeals);

    if (req.query.country.toLowerCase() === "italy") return res.send(italianMeals);

});

router.post('/add-note', (req, res) => {

    const note = req.body;

    res.send({
        status: 200,
        message: "Successfully added note!",
        note: note
    });

});

export default router;