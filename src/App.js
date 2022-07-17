//Global Style
import "./globalStyle.scss";
//import components
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import Footer from "./components/Footer";
//Import Pages
import Home from "./pages/Home";
import Study from "./pages/Study";
import Research from "./pages/Research";
import About from "./pages/About";
import StudentStories from "./pages/StudentStories";
import Events from "./pages/Events";

//Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <section
        className="pageWrap d-flex flex-column min-vh-100"
        aria-label="page wrapper"
      >
        <Header />
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<About />} />
          <Route path="/studentStories" element={<StudentStories />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </section>
    </div>
  );
}

export default App;
