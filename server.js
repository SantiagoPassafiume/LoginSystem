const express = require('express');
const app = express();

// This is bad practice, I should use a database to store the user information, but I'll use it for testing purposes.
const users = [];

// This tells the server we're using ejs syntax.
app.set('view-engine', 'ejs');
//  This tells the application that we want to take the forms we have in the .ejs files and we want to be able to access them inside the "req" variable in the post routes.
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/login', (req, res) => {});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/register', (req, res) => {});

app.listen(3000);
