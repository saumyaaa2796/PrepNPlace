import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <nav className="navbar">

      <Link 
        className="brand" 
        to="/dashboard"
      >
        PrepNPlace
      </Link>


      <div className="nav-links">

        <Link 
          className="nav-link" 
          to="/dashboard"
        >
          Dashboard
        </Link>


        <Link 
          className="nav-link" 
          to="/companies"
        >
          Companies
        </Link>


        <Link 
          className="nav-link" 
          to="/applications"
        >
          Applications
        </Link>


        <Link 
          className="nav-link" 
          to="/experiences"
        >
          Interviews
        </Link>


        <Link 
          className="nav-link" 
          to="/forum"
        >
          Forum
        </Link>


        <button 
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>


      </div>

    </nav>
  );
}

export default Navbar;