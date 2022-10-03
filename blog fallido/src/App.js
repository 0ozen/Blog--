import "./App.css";
import "./style.css";
import { Home } from "./pages/Home";
import { Route, Router, Routes,Link } from "react-router-dom";
import { Navbar } from "./pages/Navbar";
import { Footer } from "./pages/Footer";
import {AddPost} from './pages/AddPost';
import {Edit} from './pages/Edit';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/delete" element={<Home />} />
        <Route path="/link3" element={<Home />} />
        <Route path="/link4" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
