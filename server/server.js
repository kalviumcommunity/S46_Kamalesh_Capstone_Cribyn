require("dotenv").config();
const app = require('./routes')

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.json({message:`Running successfully in port ${port}`})
})

app.listen(port, () => {
    console.log(`server running in port ${process.env.PORT}`)
})