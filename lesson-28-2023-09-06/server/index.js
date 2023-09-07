const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
const prisma = new PrismaClient();
const port = 4000;

app.use(express.json());
app.use(cors());

const verifyToken = (req, res, next) => {

    const token = req.headers["x-access-token"];

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {

        if (error) {
            res.send({ error: "You session has expired or does not exist." });
            return;
        } else {
            req.userId = decoded.userId;
            next();
        }

    });

};

app.get('/secret-sauce', verifyToken, async (req, res) => {
    
    const userId = req.userId;

    const user = await prisma.user.findUnique({
        where: { id: userId },
    });

    const secretSauce = "Smiling more.";

    res.send({ secretSauce: secretSauce, email: user.email });

});

app.post('/register', async (req, res) => {

    const registerData = req.body;

    if (!registerData.email || !registerData.password || !registerData.fullName)
    {
        res.send({ error: "You've left empty fields" });
        return;
    }

    try {
        const hashedPassword = bcrypt.hashSync(registerData.password, 10);
    
        const user = await prisma.user.create({
            data: {
                email: registerData.email,
                password: hashedPassword,
                fullName: registerData.fullName
            }
        });
    } catch (error) {
        console.log(error);
        res.send({ error: "Something went wrong. Please try again later." });
        return;
    }

    res.send({ success: "Your account has been created with " + user.email });

});

app.post('/login', async (req, res) => {

    const loginData = req.body;

    if (!loginData.email || !loginData.password) {
        res.send({ error: "You've left empty fields." });
        return;
    }

    const user = await prisma.user.findUnique({
        where: { email: loginData.email }
    });

    if (!user) {
        res.send({ error: "An account with that email does not exist." });
        return;
    }

    const passwordValid = await bcrypt.compare(loginData.password, user.password);

    if (!passwordValid) {
        res.send({ error: "Password for that email is invalid." });
        return;
    }

    res.send({
        token: jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: "1h" }),
        user
    });

});

app.listen(port, () => {
    console.log("Server is running on port ", port);
});