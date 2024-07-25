import UserModel from "../model/userschema.db.js";

const createpost = async (req, res) => {
    const { title, details } = req.body;

    try {
        const post = await UserModel.create({ title, details });
        res.status(201).send("Post created successfully");
    } catch (error) {
        res.status(500).send("Error creating post");
    }
};

const getallpost = async (req, res) => {
    try {
        const posts = await UserModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).send("Error retrieving posts");
    }
};

const getsinglepost = async (req, res) => {
    const { postid } = req.query;

    try {
        const post = await UserModel.findById(postid);
        if (!post) {
            return res.status(404).send("Post not found");
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).send("Error retrieving post");
    }
};

const updatepost = async (req, res) => {
    const { postid, title, details } = req.body;

    try {
        const post = await UserModel.findByIdAndUpdate(postid, { title, details }, { new: true });
        res.status(200).send("Post updated successfully");
    } catch (error) {
        res.status(500).send("Error updating post");
    }
};

const deletepost = async (req, res) => {
    const { postid } = req.body;

    try {
        const post = await UserModel.findByIdAndDelete(postid);
        if (!post) {
            return res.status(404).send("Post not found");
        }
        res.status(200).send("Post deleted successfully");
    } catch (error) {
        res.status(500).send("Error deleting post");
    }
};

export { createpost, getallpost, getsinglepost, deletepost, updatepost };
