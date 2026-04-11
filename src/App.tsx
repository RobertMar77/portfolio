import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
