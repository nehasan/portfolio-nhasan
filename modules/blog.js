import express from "express";
import Blog from "../models/blog.js";

export const getAllBlogs = async () => {
    const blogs = await Blog.find();
    return blogs;
}

export const createNewBlog = async (params) => {
    try {
        const blog = new Blog({
            title: params.title,
            author: params.author,
            published_on: params.published_on,
            link: params.link,
            description: params.description,
            keywords: params.keywords
        });
        blog.save();
    } catch (error) {
        console.log(error);
        throw new error;
    }
}

export const getBlog = async (id) => {
    try {
        const blog = Blog.findOne({ _id: id });
        return blog;
    } catch (error) {
        console.log(error);
        throw new error;
    }
}

export const updateBlog = async (id, params) => {
    const filter = { _id: id }
    const updateQuery = {
        title: params.title,
        author: params.author,
        published_on: params.published_on,
        link: params.link,
        description: params.description,
        keywords: params.keywords
    }
    const blog = Blog.findOneAndUpdate(filter, updateQuery, {
        new: true
    });

    return blog;
}