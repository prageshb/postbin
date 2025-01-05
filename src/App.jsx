import './App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/home"; 
import Info from "./pages/info"; 
import Post from "./pages/post"; 
import ApiConfig from "./api/apiConfig";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route


function App() {
  return (
    
      <div>
        <NavBar /> 
        <ApiConfig />
        <main className="main-content"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/post" element={<Post />} />
          </Routes>
        </main>
      </div>
    
  );
}

export default App;