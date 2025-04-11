import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginSignup = () => {
  const [state, setState] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const url = state === "signup" ? "http://backend-rukhshifaheems-projects.vercel.app/user/register" : "http://backend-rukhshifaheems-projects.vercel.app/user/login";
      const { data } = await axios.post(url, form);
  
      if (state === "signup") {
        toast.success("Signup successful! Redirecting to login...");
        setState("login"); // Switch to login form
      } else {
        // Store the token in a cookie
       document.cookie = `token=${data.token}; path=/; secure; samesite=strict`;
  
        toast.success("Login successful! Redirecting to shop...");
        setTimeout(() => navigate("/shop"), 2000); // Redirect after 2 sec
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 px-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {state === "login" ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {state === "signup" && (
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" required />
          )}
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md" required />

          <button type="submit" className="w-full bg-red-500 text-white py-3 rounded-md mt-4">
            {state === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-3">
          {state === "login" ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setState(state === "login" ? "signup" : "login")} className="text-red-500 font-medium hover:underline">
            {state === "login" ? "Sign Up here" : "Login here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
