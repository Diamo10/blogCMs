import { createContext, useContext, useEffect, useState } from "react";
import { getBlogByID } from "../API/blogAPI";
import { getAuthor } from "../API/userAPI";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState();
  const [author, setAuthor] = useState();
  useEffect(() => {
    const fetchBlog = async () => {
      const id = sessionStorage.getItem("blog");
      const response = await getBlogByID(id);
      setBlog(response);
      const authorResponse = await getAuthor(response.author);
      setAuthor(authorResponse);
    };
    fetchBlog();
  }, []);
  const blogBYID = async (blogID) => {
    const blog = await getBlogByID(blogID);
    sessionStorage.setItem("blog", blog._id);
    return blog;
  };
  return (
    <BlogContext.Provider value={{ blog, blogBYID, author }}>
      {children}
    </BlogContext.Provider>
  );
};
export const useBlog = () => {
  return useContext(BlogContext);
};
export { BlogContext, BlogProvider };
