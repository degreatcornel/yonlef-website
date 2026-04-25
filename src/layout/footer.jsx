import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { styles } from "../utils/styles";
import logo from "../assets/yonlef-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 mt-20">
      <div className={`${styles.container} grid md:grid-cols-3 gap-10`}>

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4"><img 
              src={logo} 
              alt="YONLEF Logo" 
              className="h-8 mx-auto mb-2"
            /></h3>
            <h3>YONLEF</h3>
          <p className="text-gray-400 text-sm">
            Empowering young nurses across Africa through leadership,
            mentorship, and career development opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/career-path">Career Path</a></li>
            <li><a href="/opportunities">Opportunities</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm mb-2">
            Email: collinsnnaji500@gmail.com
          </p>
          <p className="text-gray-400 text-sm mb-4">
            Location: Nigeria
          </p>

          {/* Socials */}
          <div className="flex space-x-4 text-xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
            <FaLinkedin className="cursor-pointer hover:text-blue-300" />
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Young Nursing Leaders Foundation (YONLEF). All rights reserved.
        <p>Designed and built by DeGreatCornel Global</p>
      </div>
    </footer>
  );
};

export default Footer;