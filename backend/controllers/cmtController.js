import Blog from "../models/blog.js";
import Comment from "../models/comment.js";
export const getComment = async (req, res) => {
  try {
    const id = req.params.id;
    const comment = await Comment.find({ blog: id });
    return res.status(200).send(comment);
  } catch (err) {
    console.log(err);
  }
};

export const postComment = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const user = req.user;
    body.author = user.id;
    body.blog = id;
    console.log(body);
    const comment = new Comment(body);
    comment.save();
    await Blog.findByIdAndUpdate(
      id,
      { $push: { comments: comment._id } },
      { new: true }
    );
    return res.status(200).send(comment);
  } catch (err) {
    console.log(err);
  }
};
export const deleteComment = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user;
    const comment = await Comment.findById(id);
    await Comment.findByIdAndDelete(id);
    await Blog.findByIdAndUpdate(
      comment.blog,
      { $pull: { comments: id } },
      { new: true }
    );
    return res.status(200).send("Comment deleted Sucessfully");
  } catch (err) {
    console.log(err);
  }
};
