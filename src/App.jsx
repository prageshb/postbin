import './App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/home"; 
import About from "./pages/about"; 
import Post from "./pages/post"; 
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom"; // Import Routes and Route


function App() {
  return (
    
      <div>
        <NavBar /> 
        <main className="main-content"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </main>
        <Footer />
      </div>
    
  );
}

export default App;