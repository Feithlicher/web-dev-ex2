const fetch = require('node-fetch');

// my test
fetch('http://localhost:5000/')
    .then(res => res.text())
    .then(body => console.log(body));

// <POST> /start zerofiy the shared variable M (M = 0)
fetch('http://localhost:5000/start/', { method: 'POST' })
.then(res => res.text())
.then(bod => console.log(bod));