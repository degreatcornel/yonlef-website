import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          YONLEF
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/career-path">Career Path</Link>
          <Link to="/opportunities">Opportunities</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/book">Book</Link>
          
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 px-6 pb-4">

          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/programs" onClick={toggleMenu}>Programs</Link>
          <Link to="/career-path" onClick={toggleMenu}>Career Path</Link>
          <Link to="/opportunities" onClick={toggleMenu}>Opportunities</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/book" onClick={toggleMenu}>Book</Link>
          <Link to="/mentorship" onClick={toggleMenu}>Mentorship</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;