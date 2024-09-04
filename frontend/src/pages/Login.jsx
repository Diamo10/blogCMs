import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(""); // State to manage errors
  const [loading, setLoading] = useState(false); // State to manage loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const data = await login(formdata.username, formdata.password);
      console.log(data);

      if (data) {
        console.log("Login successful:", data);
        sessionStorage.setItem("token", data);
        navigate("/");
      } else {
        setError("Login failed. Please check your credentials."); // Set error message
      }
    } catch (err) {
      setError("An unexpected error occurred."); // Handle unexpected errors
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="relative py-3 sm:max-w-xs sm:mx-auto">
          <form
            onSubmit={handleSubmit}
            className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg"
          >
            <div className="flex flex-col justify-center items-center h-full select-none">
              <div className="flex flex-col items-center justify-center gap-2 mb-8">
                <a
                  href="https://amethgalarcio.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Logo />
                </a>
                <p className="m-0 text-[16px] font-semibold dark:text-white">
                  Login to your Account
                </p>
                <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                  Get started with our app, just start section and enjoy
                  experience.
                </span>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-400">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                  placeholder="Username"
                  value={formdata.username}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"
                  placeholder="••••••••"
                  value={formdata.password}
                  onChange={handleChange}
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm mb-4">{error}</div>
              )}
              <div className="mt-5">
                <button
                  type="submit"
                  className={`py-1 px-8 ${
                    loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-800"
                  } focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none`}
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
