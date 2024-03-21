import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Pos from "../pages/pos/Pos";
import Erp from "../pages/erp/Erp";
import Management from "../pages/management/Management";
import Products from "../pages/products/Products";
import Services from "../pages/services/Services";
import Company from "../pages/company/Company";
import Career from "../pages/career/Career";
import Courses from "../pages/courses/Courses";
import Home from './../pages/home/Home';

// Create a router instance
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    name: "",
    children: [
      {
        path: "/",
        element: <Home />,
        name: "",
      },
      {
        path: "/pos",
        element: <Pos />,
        name: "POS",
      },
      {
        path: "/erp",
        element: <Erp />,
        name: "ERP",
      },
      {
        path: "/management",
        element: <Management />,
        name: "Management",
      },
      {
        path: "/products",
        element: <Products />,
        name: "Products",
      },
      {
        path: "/services",
        element: <Services />,
        name: "Services",
      },
      {
        path: "/company",
        element: <Company />,
        name: "Company",
      },
      {
        path: "/career",
        element: <Career />,
        name: "Career",
      },
      {
        path: "/courses",
        element: <Courses />,
        name: "Courses",
      },
    ],
  },

  {
    path: "*",
    element: <h1>Page not found</h1>,
  },
]);

export default router;
