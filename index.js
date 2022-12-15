import express from 'express';
import dotenv from "dotenv"

const app = express();
dotenv.config()

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(process.env.APP_PORT, () => {
    console.log("Server listening on port " + process.env.APP_PORT)
})