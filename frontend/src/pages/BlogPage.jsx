import React, { useEffect, useState } from "react";
import { useBlog } from "../context/blogContext";
import Navbar from "../components/Navbar";
import chai from "../assets/milktea.png";

const BlogPage = () => {
  const { author } = useBlog();
  const { blog } = useBlog();
  const [loading, setLoading] = useState(true);
  console.log(author);
  console.log(blog);
  useEffect(() => {
    if (author && blog) {
      setLoading(false);
    }
  }, [author, blog]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <Navbar />
        {/* main container */}
        <div className="flex gap-2">
          {/* blog panel  */}
          <div className="w-3/4">
            {/* image  */}
            <div className="flex justify-center bg-gray-100 rounded-md">
              <img src={chai} width={400} />
            </div>
            <div className="text-center mt-12 text-4xl font-macondo">
              {blog.title}
            </div>
            {/* blog description  */}
            <div
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </div>
          {/* author panel  */}
          <div className="w-1/3">
            <div className="bg-gray-300 m-2  w-[100%] h-[30rem] rounded-md font-handjet">
              <div className="text-2xl underline text-center font-handjet">
                Author details
              </div>
              <div className=" flex justify-center">
                <img src={chai} width={200} height={400} />
              </div>

              <div className=" text-2xl text-black text-center">
                Username: {author.username}
              </div>
              <div className=" text-xl text-black text-center">
                Email: {author.email}
              </div>
              <div className=" text-xl text-black text-center">
                Date: {blog.createdAt.slice(0, 10)}
              </div>
              {/* <div className=" text-xl text-black text-center">
                Time of upload: {blog.createdAt.slice(11, 16)}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
