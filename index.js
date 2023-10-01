import express from "express";
import mongoose from 'mongoose';
import passport from 'passport';
import * as dotenv from 'dotenv';
import session from "express-session";
import bodyParser from 'body-parser';
import homeRoutes from './routes/home.js';
import { connect } from './db/connection.js';
import projectsRoutes from './routes/projects.js';
import adminLoginRoutes from './routes/admin/login.js';
import adminBlogRoutes from './routes/admin/blog.js';
import path from 'path';

const app = express();
const PORT = 5001;
const __dirname = path.dirname('./');

// database connection
connect();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: 'my-secret-key',
        saveUninitialized: true,
        resave: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

// use body parser
app.use(bodyParser.json());

// use static directory such as public/
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// use views directory and view engine
// app.set('views', __dirname + 'views');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
// define the root path
app.get('/', (req, res) => {
    res.render('home/index.html.ejs', { data: { action: 'home' } });
});

// using all other routes
app.use('/home', homeRoutes);

// using admin login routes
app.use('/admin', adminLoginRoutes);

// using admin blog routes
app.use('/admin/blog/', adminBlogRoutes);

// using projects routes
app.use('/projects', projectsRoutes);


// Server
app.listen(PORT, () => {
    console.log(`Server running on port: htts://localhost:${PORT}`);
})