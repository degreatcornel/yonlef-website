import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";

import Home from "./pages/home";
import About from "./pages/about";
import Programs from "./pages/programs";
import Contact from "./pages/contact";
import Assessment from "./pages/assessment";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;