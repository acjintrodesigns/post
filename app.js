//if possible i would like to keep this page clean as possible by only rendering the paths and view engine


const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();

//view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//static folder
app.use('/public', express.static(path.join(__dirname, 'public')));


//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('contact', {layout: false});
});
app.get('/submit', (req, res) => {
    res.render('submit', {layout: false});
});
app.get('/service', (req, res) => {
    res.render('service', {layout: false});
});




app.listen(3000, () => console.log('the Server has Started on port 3000...'));