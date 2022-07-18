//Global Style
import "./globalStyle.scss";
//import components
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import Footer from "./components/Footer";
import routesData from "./components/Routes";

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
          {routesData.map((route, key) => {
            return (
              <Route path={route.path} element={route.element} key={key} />
            );
          })}
        </Routes>
        <Footer />
      </section>
    </div>
  );
}

export default App;
