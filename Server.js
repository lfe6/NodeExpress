const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require("body-parser");

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hello/:name',(req, res) => {
    console.log(req.params.name);
    res.send('Wagwan! '  +  req.params.name)})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/name', (req, res) => {
    console.log('route calling');
    console.log(req.query.firstname);

    res.send('hello ' + req.query.lastname + ' ' + req.query.firstname)
})

app.get('/whatever', (req, res) => res.send('GoodBye!'))

app.get ('/test', (req, res) =>{

//res.send('I will send a file');
res.sendFile(path.join(__dirname + '/index.html'))
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/name', (req, res) => {
    console.log("post method");
    console.log(req.body.firstname);
    res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
    })
    
app.get('/api/movies', (req, res) => {
const movies = [
    {
    "Title":"Avengers: Infinity War",
    "Year":"2018",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
    "Title":"Captain America: Civil War",
    "Year":"2016",
    "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    }
    ]
    res.status(200).json({
        message: "Everything is good",
        myMovies:movies
    })
//res.send('myAPI')
})
