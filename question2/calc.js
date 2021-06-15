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
    res.send(M.toString())
})


// <POST> /calc/sub/:num sets M -= :num. It returns the new M
app.post('/calc/sub/:num', (req, res) => {
    const num = parseInt(req.params.num);
    M -= num;
    res.send(M.toString());
})

// <PUT> /calc/multiply/:num sets M=:num * M. it returns the new M
app.put("/calc/multiply/:num", (req, res) => {
    const num = parseInt(req.params.num);
    M *= num;
    res.send(M.toString());
})

// <PUT> /calc/divide/:num sets M=M/:num. It returns the new M
app.put("/calc/divide/:num", (req, res) => {
    const num = parseInt(req.params.num)
    M /= num
    res.send(M.toString())
})


// <GET> /calc/M returns M
app.get('/calc/M', (req, res) => {
    res.send(M.toString())
})

// <POST> /calc/reset sets M=0 and returns 0
app.post('/calc/reset', (req, res) => {
    M = 0
    res.send(M.toString())
})

module.exports = app


// listen on a port
// app.listen(5000, () => console.log("Server started on port 5000"));