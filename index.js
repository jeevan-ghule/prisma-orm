const express = require("express")
const app = express()

app.use(express.json())
app.use('/api/user', require('./routes/user'))
app.use('/api/post', require('./routes/post'))

app.get("/", (req, res) => {
    res.send("prisma server is working")
})

app.listen(5005, () => {
    console.log("listen on 5005")
})