const fetch = require('node-fetch');

// my test
fetch('http://localhost:5000/')
    .then(res => res.text())
    .then(body => console.log(body));

// <POST> /start zerofiy the shared variable M (M = 0)
fetch('http://localhost:5000/start/', { method: 'POST' })
.then(res => res.text())
.then(body => console.log(body));

// <POST> /calc/add/:num sets M+= :num . It returns the new M
fetch('http://localhost:5000/calc/add/5', { method: 'POST' })
.then(res => res.text())
.then(body => console.log(body));

// <POST> /calc/sub/:num sets M -= :num. It returns the new M
fetch('http://localhost:5000/calc/sub/3', { method: 'POST' })
.then(res => res.text())
.then(body => console.log(body));

// <PUT> /calc/multiply/:num sets M=:num * M. it returns the new M
fetch('http://localhost:5000/calc/multiply/4', { method: 'PUT' })
.then(res => res.text())
.then(body => console.log(body));

// <PUT> /calc/divide/:num sets M=M/:num. It returns the new M
fetch('http://localhost:5000/calc/divide/2', { method: 'PUT' })
.then(res => res.text())
.then(body => console.log(body));

// <GET> /calc/M returns M
fetch('http://localhost:5000/calc/M')
    .then(res => res.text())
    .then(body => console.log(body));

// <POST> /calc/reset sets M=0 and returns 0
fetch('http://localhost:5000/calc/reset', { method: 'POST' })
.then(res => res.text())
.then(body => console.log(body));