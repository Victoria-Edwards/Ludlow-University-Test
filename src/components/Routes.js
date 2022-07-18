import Home from "../pages/Home";
import Study from "../pages/Study";
import Research from "../pages/Research";
import About from "../pages/About";
import StudentStories from "../pages/StudentStories";
import Events from "../pages/Events";

export default [
  {
    title: "Home",
    path: "/",
    element: <Home />,
  },

  {
    title: "Study",
    path: "/study",
    element: <Study />,
  },
  {
    title: "Research",
    path: "/research",
    element: <Research />,
  },
  {
    title: "About",
    path: "/about",
    element: <About />,
  },
  {
    title: "Student Stories",
    path: "/studentStories",
    element: <StudentStories />,
  },
  {
    title: "Activities and clubs",
    path: "/events",
    element: <Events />,
  },
];
