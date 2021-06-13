const app = require("./calc.js")
// const path = require("path")


// <GET> /calc.html return an HTML page that allow running calculation via HTTP request to the calc.js module on the backend
app.get('/calc.html', (req, res) => {
    res.sendFile(__dirname + "/calc.html")
})

// <GET> /calc.css
app.get('/calc.css', (req, res) => {
    res.sendFile(__dirname + "/calc.css")
})

// <GET> /frontEndJs.js
app.get('/frontEndJs.js', (req, res) => {
    res.sendFile(__dirname + "/frontEndJs.js")
})