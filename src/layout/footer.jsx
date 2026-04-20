const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center">
        
        <p className="mb-2">
          © {new Date().getFullYear()} Young Nursing Leaders Foundation
        </p>

        <p className="text-sm text-gray-400">
          Empowering young nurses to become global leaders
        </p>

        <p className="text-sm text-gray-400">
          Built By DeGreatCornel Global
        </p>

      </div>
    </footer>
  );
};

export default Footer;