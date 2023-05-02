import express from "express";
import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    // console.log(req);
    res.render('home/index.html.ejs', { data: { action: 'home' } });
});

export default router;