import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/home/page";
import Header from "./shared/Header";
import Layout from "./shared/Layout";
import { lazy } from "react";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;

const About=lazy(()=>import('./pages/about/page'))
const Work=lazy(()=>import('./pages/work/page'))
const Blog=lazy(()=>import('./pages/blog/page'))