const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-6">
        This page wandered off… but we can guide you back.
      </p>

      <a href="/" className="text-blue-600 font-semibold">
        Go back home →
      </a>
    </div>
  );
};

export default NotFound;