import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";


function Register() {

  const [formData, setFormData] = useState({
    name: "",
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

      const data = await registerUser(formData);

      alert("Registration Successful!");

      localStorage.setItem(
        "token",
        data.token
      );

      navigate("/dashboard");


    } catch(error) {

      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    }

  };



  return (

    <div className="auth-container">


      <div className="auth-card">


        <h1>
          PrepNPlace
        </h1>


        <h2>
          Register
        </h2>



        <form onSubmit={handleSubmit}>


          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />


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
            Register
          </button>


        </form>



        <p>

          Already have an account?{" "}

          <Link to="/">
            Login
          </Link>

        </p>



      </div>


    </div>

  );
}


export default Register;