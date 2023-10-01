import express from "express";
import Blog from "../../models/blog.js";
import { getAllBlogs, createNewBlog, getBlog, updateBlog } from "../../modules/blog.js";

const router = express.Router();

router.get('/index', async (req, res) => {
    const blogs = await getAllBlogs();
    const data = { action: 'blog', blogs: blogs };

    res.render('../views/admin/blog/index.html.ejs', { 
        title: 'Admin|Blog|Index', data: data 
    });
});

router.get('/new', (req, res) => {
    res.render('../views/admin/blog/new.html.ejs', { 
        title: 'Admin|Blog|New',
        data: { action: 'blog' } 
    });
});

router.get('/:id', async (req, res) => {
    const blog = await getBlog(req.params.id);
    const data = { action: 'blog', blog: blog };

    res.render('../views/admin/blog/show.html.ejs', {
        title: 'Admin|Blog|Show',
        data: data
    });
})

router.post('/create', async (req, res) => {
    const blog = await createNewBlog(req.body);

    res.redirect('/admin/blog/index');
});

router.get('/edit/:id', async (req, res, next) => {
    const blog = await getBlog(req.params.id)

    res.render('../views/admin/blog/edit.html.ejs', {
        title: 'Admin|Blog|Edit', 
        data: { action: 'blog', blog: blog }
    });
});

router.post('/update/:id', async (req, res, next) => {
    const blog = await updateBlog(req.params.id, req.body);

    res.redirect('/admin/blog/index');
});

export default router;