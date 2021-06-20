const express = require('express');

// init express
const app = express()


let M = 0
// <POST> /start zerofiy the shared variable M (M = 0)
app.post('/start', (req, res) => {
    M = 0
    res.send("M = 0")
})

// <POST> /calc/add/:num sets M+= :num . It returns the new M
app.post('/calc/add/:num', (req, res) => {
    if(!isNaN(req.params.num)){
        const num = parseFloat(req.params.num)
        M += num
        res.send(M.toString())
    }else{
        res.status(500);
        res.send("error! http status: 500");
    }
})


// <POST> /calc/sub/:num sets M -= :num. It returns the new M
app.post('/calc/sub/:num', (req, res) => {
    if(!isNaN(req.params.num)){
        const num = parseFloat(req.params.num);
        M -= num;
        res.send(M.toString());
    }else{
        res.status(500);
        res.send("error! http status: 500");
    }
})

// <PUT> /calc/multiply/:num sets M=:num * M. it returns the new M
app.put("/calc/multiply/:num", (req, res) => {
    if(!isNaN(req.params.num)){
        const num = parseFloat(req.params.num);
        M *= num;
        res.send(M.toString());
    }else{
        res.status(500);
        res.send("error! http status: 500");
    }
})

// <PUT> /calc/divide/:num sets M=M/:num. It returns the new M
app.put("/calc/divide/:num", (req, res) => {
    if((parseInt(req.params.num) === 0) || isNaN(req.params.num)){
        res.status(500);
        res.send("error! http status: 500");
    }else{
        const num = parseFloat(req.params.num)
        M /= num
        res.send(M.toString())
    }
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

module.exports = app;