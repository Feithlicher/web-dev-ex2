const express = require('express');

// init express
const app = express()

// my test
app.get('/', (req, res) => {
    res.send("hey nate!")
})

// <POST> /start zerofiy the shared variable M (M = 0)
app.post('/start', (req, res) => {
    let M = 0
    res.send("M value is: " + M)
})










// listen on a port
app.listen(5000, () => console.log("Server started on port 5000"));