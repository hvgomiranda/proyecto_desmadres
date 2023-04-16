import './App.css';
import NavBar from "../src/components/NavBar/NavBar";
import Home from "../src/components/Home/Home";
import Footer from "../src/components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

 
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
