import { Link } from "react-router-dom";

const Navbar = () => {
  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  return (
    <nav>
      {!getToken() && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}

      {getToken() && <Link to="/profile">Profile</Link>}
    </nav>
  );
};

export default Navbar;
