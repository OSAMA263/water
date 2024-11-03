import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/home/page";
import Header from "./shared/Header";
import { lazy, Suspense, useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Suspense fallback={<span>yo</span>}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/blog/:id" element={<SingleBlog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

const About = lazy(() => import("./pages/about/page"));
const Work = lazy(() => import("./pages/work/page"));
const Blog = lazy(() => import("./pages/blog/page"));
const SingleBlog = lazy(() => import("./pages/blog//single blog/page"));
const Contact = lazy(() => import("./pages/contact/page"));
