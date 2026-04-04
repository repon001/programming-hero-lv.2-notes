import express from "express"
import connectoToDatabase from "./database.mjs"

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to docker!")
})

await connectoToDatabase();
app.listen(5000, () => {
    console.log("Server running on port 5000");
});