import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Rooms from "./pages/rooms/Rooms";
import Services from "./pages/services/Services";
import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Rooms />
      <Services />
      <NotFound />
    </BrowserRouter>
  );
};

export default App;
