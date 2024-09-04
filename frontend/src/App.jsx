import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Unprotected
import Login from "./pages/Login"; // Unprotected
import { AuthProvider, useAuth } from "./context/AuthContext";
import BlogPage from "./pages/BlogPage";
import { BlogProvider } from "./context/blogContext";

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const { user } = useAuth();

  return user ? element : <Login />; // Redirect to Login if not authenticated
};

const App = () => {
  return (
    <AuthProvider>
      <BlogProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Unprotected */}
            <Route path="/login" element={<Login />} /> {/* Unprotected */}
            <Route
              path="/blog/:id"
              element={<ProtectedRoute element={<BlogPage />} />}
            />
          </Routes>
        </Router>
      </BlogProvider>
    </AuthProvider>
  );
};

export default App;
