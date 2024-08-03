import About from "./components/About/About";
import Activities from "./components/Activities/Activities";
import Footer from "./components/Footer/Footer"
import Home from "./components/Home"
import NavBar from "./components/Navbar/NavBar"
import { Route, Routes } from "react-router-dom";
import Publications from "./components/Publications/Publications";


function App() {
  

  return (
    <>
      <NavBar path="/"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/publications" element={<Publications />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App