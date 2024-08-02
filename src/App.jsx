import About from "./components/About/About";
import Footer from "./components/Footer/Footer"
import Home from "./components/Home"
import NavBar from "./components/Navbar/NavBar"
import { Route, Routes } from "react-router-dom";


function App() {
  

  return (
    <>
      <NavBar path="/"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App