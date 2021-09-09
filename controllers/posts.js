import Post from "../models/post.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (e) {
    res.status(404).json({error: e.message})
  }
}

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (post) {
      res.json(post)
    }
  } catch (e) {
    res.status(404).json({error: "Post not found"})
  }
}

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndUpdate(id, req.body, (error, content) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
  })
  res.status(200).json(post);
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Post.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Post deleted");
    }
    throw new Error("Post not found")
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}