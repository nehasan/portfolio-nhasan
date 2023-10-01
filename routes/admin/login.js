import express from 'express';
import passport from 'passport';
import User from '../../models/user.js';
import passportLocal from 'passport-local';
import { getAllBlogs } from '../../modules/blog.js';

const router = express.Router();
const LocalStrategy = passportLocal.Strategy;

passport.use (new LocalStrategy (
    function (username, password, done) {
        try {
            console.log('--- here to find user.')
            const user = User.findOne ({
                email: username,
                password: password,
            }).then((user) => {
                console.log(user);
                if (!user) {
                    return done(null, false);
                }
                return done (null, user);
            });
        } catch (error) {
            console.log('User does not exist!');
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

const checkAuthenticated = (req, res, next) => {
    console.log("--- check authenticated: ", req.isAuthenticated());
    if(!req.isAuthenticated()) {
        return res.redirect('/admin/login');
    }
    next();
}

router.post('/login', passport.authenticate('local', { failureRedirect: '/admin/panel'}), (req, res) => {
    console.log('--- here at admin login : post');
    console.log(req.user);
    res.redirect('/admin/index');
});

// router.post('/login', (req, res) => {
//     console.log('--- here at admin login : post');
//     console.log(req.body.params);
//     res.render('../views/admin/login.html.ejs');
// });

router.get('/login', (req, res) => {
    console.log('--- here at admin login : get');
    res.render('../views/admin/login.html.ejs');
});

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) { return next(err) }
        res.redirect('/admin/login');
    });
})

router.get('/index', checkAuthenticated, async (req, res) => {
    console.log('--- here at admin panel : get');
    const blogs = await getAllBlogs();
    const data = { action: 'home', blogs: blogs };
    res.render('../views/admin/index.html.ejs', { title: 'Portfolio|Admin', data: data });
});

export default router;