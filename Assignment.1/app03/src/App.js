import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from './components/Items/Card.js';


import AboutMe from "./components/Layout/AboutMe.js";
import ContactMe from "./components/Layout/ContactMe.js";
import Footer from './components/Layout/Footer.js';
import Header from './components/Layout/Header.js';
import Home from "./components/Layout/Home.js";
import NoFound from "./components/Layout/NoFound.js";
import Projects from "./components/Layout/Projects.js";
import Services from "./components/Layout/Services.js";

function App() {
  return (


    <BrowserRouter>
      <div className="content"> {/* Apply content class here */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="*" element={<NoFound />} />
        </Route>
      </Routes>
    </div>
    <Footer/>
  </BrowserRouter>

  );
}

export default App;
