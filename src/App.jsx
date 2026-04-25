import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Programs from "./pages/programs";
import Contact from "./pages/contact";
import Assessment from "./pages/assessment";
import CareerPath from "./pages/CareerPath";
import Opportunities from "./pages/Opportunities";
import Book from "./pages/Book";
import Unlock from "./pages/Unlock";
import Mentorship from "./pages/Mentorship";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Careerpath" element={<CareerPath />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="book" element={<Book />} />
          <Route path="unlock" element={<Unlock />} />
          <Route path="mentorship" element={
            <ProtectedRoute>
              <Mentorship />
            </ProtectedRoute>
          } />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;