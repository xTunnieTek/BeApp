const Post = require('../models/postModel');
const User = require('../models/userModel');

exports.createPost = async (req,res,next) => {
    const {id,content} = req.body;
    const post = await Post.create({user:id,content});
    return res.status(200).json({
        status:"success",
        post
    })
}

exports.getAll = async (req,res,next) => {
    const posts = await Post.find({});
    return res.status(200).json({
        status:"success",
        posts
    })
}

// Delete Post
exports.deletePost = async (req,res,next) => {
    const {id} = req.body;
    const post = await Post.findByIdAndDelete(id);
    return res.status(200).json({
        status:"success",
        post
    })
}

// Update Post
exports.updatePost = async (req,res,next) => {
    const {id,content} = req.body;
    const post = await Post.findByIdAndUpdate(id , {content});
    return res.status(200).json({
        status:"success",
        post
    })
}

