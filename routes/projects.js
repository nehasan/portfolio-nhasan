import express from "express";
import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    const data = {
        action: 'projects'
    }
    res.render('projects/index.html.ejs', { data: data });
});

router.get('/games/birdncrosshair', (req, res) => {
    res.render('projects/games/birdncrosshair.html.ejs');
})

export default router;