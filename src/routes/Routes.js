import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Services from "../pages/Services";

export const routes = [
  {
    route: "/",
    element: <Home />,
  },
  {
    route: "/about",
    element: <About />,
  },
  {
    route: "/products",
    element: <Products />,
  },
  {
    route: "/services",
    element: <Services />,
  },
  {
    route: "/contact",
    element: <Contact />,
  },
];
