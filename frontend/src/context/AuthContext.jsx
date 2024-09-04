import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, getUserById } from "../API/userAPI"; // Import your service functions

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    const fetchUser = async () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        try {
          const userData = await getUserById(token);
          setUser(userData);
        } catch (err) {
          console.error("Failed to fetch user", err);
          sessionStorage.removeItem("token");
          setUser(null);
        }
      }
    };

    fetchUser();
  }, []);
  // Function to log in a user
  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const token = await loginUser({ username, password }); // Login and get token
      if (token) {
        sessionStorage.setItem("token", token); // Save token to sessionStorage
        const userData = await getUserById(token); // Fetch user data using token
        setUser(userData); // Set user data to state
        // console.log(user);
        return token;
      }
    } catch (err) {
      setError(err); // Set error if login fails
      console.error("Login failed", err); // Log error to console
    } finally {
      setLoading(false); // End loading state
    }
  };

  // Function to log out a user
  const logout = () => {
    sessionStorage.removeItem("token"); // Clear token from sessionStorage
    setUser(null); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
