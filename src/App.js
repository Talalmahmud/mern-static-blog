import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nabvar from "./components/nav/Nabvar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>
            <Nabvar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
