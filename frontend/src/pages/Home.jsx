import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Bigcard from "../components/Bigcard";
import { getBlog } from "../API/blogAPI";
import { useAuth } from "../context/AuthContext";
import SidePanel from "../components/SidePanel";

const Home = () => {
  const [blog, setBlog] = useState([]);
  const [teablog, setTeablog] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const fetchBlog = async () => {
      const response = await getBlog();
      const blog = response.blog;
      // console.log(blog);
      // console.log(user);
      const filtredTeaBlog = blog.filter((item) => item.tags.includes("tea"));
      setBlog(blog);
      setTeablog(filtredTeaBlog);
    };
    fetchBlog();
  }, []);
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
      <Navbar />

      <div className=" flex gap-2 ">
        <div className="w-3/4">
          {/* big Card */}
          {blog.slice(0, 1).map((item, index) => (
            <div key={index}>
              <Bigcard title={item.title} content={item.content} />
            </div>
          ))}

          {/* SamllCard Recent */}
          <div className="text-center font-macondo text-3xl mb-4">
            {" "}
            Recent Blogs
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {blog.map((item, index) => (
              <div key={index}>
                <Card
                  title={item.title}
                  content={item.content}
                  tags={item.tags}
                  id={item._id}
                />
              </div>
            ))}
          </div>
          <div className="w-[100%] border border-b-2 mb-4 mt-4  border-double border-black border-spacing-4"></div>

          {/* SamllCard Tech */}
          <div className="text-center font-macondo text-3xl mb-4 mt-4">
            {" "}
            Tech Blogs
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teablog.map((item, index) => (
              <div key={index}>
                <Card
                  title={item.title}
                  content={item.content}
                  tags={item.tags}
                />
              </div>
            ))}
          </div>
          <div className="w-[100%] border border-b-2 mb-4 mt-4  border-double border-black border-spacing-4"></div>

          {/* SamllCard Educational */}
          <div className="text-center font-macondo text-3xl mb-4 mt-4">
            {" "}
            Educational Blogs
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teablog.map((item, index) => (
              <div key={index}>
                <Card
                  title={item.title}
                  content={item.content}
                  tags={item.tags}
                />
              </div>
            ))}
          </div>
          <div className="w-[100%] border border-b-2 mb-4 mt-4  border-double border-black border-spacing-4"></div>
        </div>

        {/* Start of side panel */}
        <div className="w-1/4">{user && <SidePanel />}</div>
      </div>
    </div>
  );
};

export default Home;
