const app = require("./calc.js")

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


// <GET> /readme.html return EX1’s readme
app.get('/readme.html', (req, res) => {
    res.sendFile(__dirname + "/readme/readme.html")
})

app.get('/readme.css', (req, res) => {
    res.sendFile(__dirname + "/readme/readme.css")
})

app.get('/beautiful2.jpg', (req, res) => {
    res.sendFile(__dirname + "/readme/beautiful2.jpg")
})

app.get('/brushing.jpg', (req, res) => {
    res.sendFile(__dirname + "/readme/brushing.jpg")
})

app.get('/contactMePic.jpeg', (req, res) => {
    res.sendFile(__dirname + "/readme/contactMePic.jpeg")
})


// <GET> /test.html returns EX1’s test.html (that should work, including importing the js files needed)
app.get('/test.html', (req, res) => {
    res.sendFile(__dirname + "/testHtmlEx1/test.html")
})

app.get('/test.css', (req, res) => {
    res.sendFile(__dirname + "/testHtmlEx1/test.css")
})

app.get('/test.js', (req, res) => {
    res.sendFile(__dirname + "/testHtmlEx1/test.js")
})

app.get('/qSyntaxTest.html', (req, res) => {
    res.sendFile(__dirname + "/testHtmlEx1/qSyntaxTest.html")
})

app.get('/qSyntaxTest.css', (req, res) => {
    res.sendFile(__dirname + "/testHtmlEx1/qSyntaxTest.css")
})

app.get('/learn.js', (req, res) => {
    res.sendFile(__dirname + "/testHtmlEx1/learn.js")
})