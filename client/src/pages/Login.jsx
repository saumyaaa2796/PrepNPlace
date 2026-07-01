import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      console.log(data);

      alert("Login Successful!");

      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
  <div className="auth-container">

    <div className="auth-card">

      <h1>PrepNPlace</h1>

      <h2>Login</h2>


      <form onSubmit={handleSubmit}>


        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />


        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />


        <button type="submit">
          Login
        </button>


      </form>


      <p>
        Don't have an account?{" "}
        <Link to="/register">
          Register
        </Link>
      </p>


    </div>

  </div>
);
}

export default Login;