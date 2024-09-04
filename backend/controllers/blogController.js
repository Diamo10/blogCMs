import express from "express";
import Blog from "../models/blog.js";
import User from "../models/user.js";

//create blog post
export const createBlog = (req, res) => {
  try {
    const token = req.user;
    const body = req.body;
    body.author = token.id;
    const newBlog = new Blog(body);
    newBlog.save();
    return res.status(200).send(newBlog);
  } catch (error) {
    console.log(error);
  }
};
export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.find().sort({ createdAt: -1 });
    // console.log(blog);
    return res.status(200).send({ blog });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "An error occurred while fetching blogs" });
  }
};

export const getBlogByID = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user;
    if (!user) {
      return res.status(401).send("Unauthorized access");
    }
    const blog = await Blog.findOne({ _id: id });
    if (!blog) {
      return res.status(404).send("No Blogs found");
    }
    return res.status(200).send(blog);
  } catch (error) {
    console.error(error);
  }
};

export const getBlogByAuthorID = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user;
    if (!user) {
      return res.status(401).send("Unauthorized access");
    }
    const blog = await Blog.find({ author: id });
    if (!blog) {
      return res.status(404).send("No Blogs found");
    }
    return res.status(200).send(blog);
  } catch (error) {
    console.error(error);
  }
};

export const updateBlog = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).send("Unauthorized access");
    }
    const id = req.params.id;
    const body = req.body;
    const blog = await Blog.findByIdAndUpdate(id, body, { new: true });
    if (!blog) {
      return res.status(404).send("No Blogs found");
    }
    return res
      .status(200)
      .send({ blog: blog, message: "Message updated Sucessfully" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const user = req.user;
    const id = req.params.id;
    if (!user) {
      return res.status(401).send("Unauthorized access");
    }
    await Blog.findByIdAndDelete(id);
    return res.status(204).send({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
