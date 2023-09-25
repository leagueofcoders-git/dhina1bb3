//import logo from "./logo.svg";
//import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import About from "./About";
import Clients from "./Clients";
import Courses from "./Courses";
import Footer from "./Footer";
import Features from "./Features";
import CTA from "./CTA";
import Portfolio from "./Products";
import Testimonials from "./Testimonials";
import Counts from "./Counts";
import Team from "./Team";
import Contact from "./Contact";
import Products from "./Products";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main id="main">
        {/* <About />
        <Clients />
        <Courses />
        <Features />
        <CTA />
        <Portfolio />
        <Counts />
        <Testimonials />
        <Team />
        <Contact/> */}

        <Routes>
          <Route path="/" element={<Navigation />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/features" element={<Features />} />
          <Route path="/cta" element={<CTA />} />
          <Route path="/recipes" element={<Products />} />
          <Route path="/counts" element={<Counts />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
