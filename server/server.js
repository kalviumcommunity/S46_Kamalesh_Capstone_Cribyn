require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.json({message:`Running successfully in port ${port}`})
})

app.listen(process.env.PORT, () => {
    console.log(`server running in port ${process.env.PORT}`)
})