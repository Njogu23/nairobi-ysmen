import React, { Suspense, lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

const About = lazy(() => import("./components/About/About"));
const Activities = lazy(() => import("./components/Activities/Activities"));
const Home = lazy(() => import("./components/Home"));
const Publications = lazy(() => import("./components/Publications/Publications"));
const ActivityDetail = lazy(() => import("./components/Activities/ActivityDetails"));

function App() {
  return (
    <>
      <NavBar path="/" />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activity/:id" element={<ActivityDetail />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
