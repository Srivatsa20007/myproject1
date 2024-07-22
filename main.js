import express from "express";
import mongoose from "mongoose";
import { signup } from "./models/signup.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

mongoose.connect("mongodb://localhost:27017/client").then(() => console.log("Database Connected")).catch(() => console.log("Database Not Connected"))

app.post('/signup', async (req, res) => {
    const { username, email, password, employee } = req.body;
    res.send("hello world!");
    console.log("request accepted");
    try {
        const newUser = new signup({
            name: username,
            email: email,
            password: password,
            isEmployee: employee
        });
        await newUser.save();
        res.status(200).send('Signup successful');
    } catch (error) {
        res.status(500).send('Error occurred: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});