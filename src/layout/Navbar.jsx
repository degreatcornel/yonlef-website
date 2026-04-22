import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold">
          YONLEF
        </h1>

        {/* Links */}
        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/assessment">Assessment</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/careerPath">Career Path</Link>
          <Link to="/opportunities">Opportunities</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;