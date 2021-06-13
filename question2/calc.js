const express = require('express');

// init express
const app = express()

// my test
app.get('/', (req, res) => {
    res.send("hey nate!")
})

let M = 0
// <POST> /start zerofiy the shared variable M (M = 0)
app.post('/start', (req, res) => {
    M = 0
    res.send("M = 0")
})

// <POST> /calc/add/:num sets M+= :num . It returns the new M
app.post('/calc/add/:num', (req, res) => {
    const num = parseInt(req.params.num)
    M += num
    res.send("(add) new M is: " + M)
})


// <POST> /calc/sub/:num sets M -= :num. It returns the new M
app.post('/calc/sub/:num', (req, res) => {
    const num = parseInt(req.params.num)
    M -= num
    res.send("(sub) new M is: " + M)
})

// <PUT> /calc/multiply/:num sets M=:num * M. it returns the new M
app.put("/calc/multiply/:num", (req, res) => {
    const num = parseInt(req.params.num)
    M *= num
    res.send("(mult) new M is: " + M)
})

// <PUT> /calc/divide/:num sets M=M/:num. It returns the new M
app.put("/calc/divide/:num", (req, res) => {
    const num = parseInt(req.params.num)
    M /= num
    res.send("(div) new M is: " + M)
})


// <GET> /calc/M returns M
app.get('/calc/M', (req, res) => {
    res.send("current M value is: " + M)
})

// <POST> /calc/reset sets M=0 and returns 0
app.post('/calc/reset', (req, res) => {
    M = 0
    res.send("(reset) new M is: " + M)
})

module.exports = app


// listen on a port
// app.listen(5000, () => console.log("Server started on port 5000"));