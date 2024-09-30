import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      className="navBar px-8 py-6 text-xl h-32 flex justify-between items-center"
      style={{ backgroundColor: isHome ? "#9FAEFF" : "inherit" }}
    >
      <Link to="/">
        <h2 className="text-2xl">Cribyn</h2>
      </Link>
      <div className="navRight px-8 w-1/3 font-medium flex justify-around items-center">
        <Link to="/search">Search</Link>
        <Link to="">Post an AD</Link>
        <button
          className="bg-[#c44747] h-8 w-1/4 text-white tracking-widest  "
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
