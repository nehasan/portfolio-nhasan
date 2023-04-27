import express from "express";
import bodyParser from 'body-parser';
import homeRoutes from './routes/home.js';
import path from 'path';

const app = express();
const PORT = 5001;
const __dirname = path.dirname('./');

// use body parser
app.use(bodyParser.json());

// use static directory such as public/
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// use views directory and view engine
// app.set('views', __dirname + 'views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// define the root path
app.get('/', (req, res) => {
    res.render('home/index.html.ejs');
});

// using all other routes
app.use('/home', homeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: htts://localhost:${PORT}`);
})