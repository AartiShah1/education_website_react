import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Landing_page from './pages/Landing_page';
import About from './pages/about';
import Courses from './pages/Courses';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter basename="/education_website_react">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
