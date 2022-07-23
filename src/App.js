//Global Style
import "./globalStyle.scss";
//import components
import Header from "./components/Header";

import Footer from "./components/Footer";

import Breadcrumbs from "./components/Breadcrumb";
import { routesData } from "./routes";

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
        <Breadcrumbs crumbs={routesData} />
        <Routes>
          {routesData.map((route, index) => {
            return (
              <Route
                exact
                path={route.path}
                element={route.element}
                key={index}
              />
            );
          })}
        </Routes>
        <Footer />
      </section>
    </div>
  );
}

export default App;
