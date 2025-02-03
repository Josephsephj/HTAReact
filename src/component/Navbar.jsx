import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="./image/loge eecca.jpg" alt="Logo" width="70px" />
      <NavLink to="/" end>
        <i className="fa-solid fa-house"></i>
        Home
      </NavLink>
      <NavLink to="/about">
        <i className="fa-solid fa-briefcase icon"></i>About Us
      </NavLink>
      <NavLink to="/ourwork">
        <i className="fa-solid fa-list-check"></i>Ourwork
      </NavLink>
      <NavLink to="/membership">Membership</NavLink>
      <NavLink to="/donate">
        {" "}
        <i className="fa-solid fa-hand-holding-dollar"></i>Donate
      </NavLink>

      <NavLink to="/contect">Contact</NavLink>
      <NavLink to="/strecture">Strecture</NavLink>
      {/* <button className="hamburger" onClick={() => alert("Hamburger clicked!")}>
        &#9776;
      </button> */}
    </nav>
  );
}

export default Navbar;
