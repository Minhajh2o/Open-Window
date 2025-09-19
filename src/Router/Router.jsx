import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home"
import News from "../Layouts/News";
import Auth from "../Layouts/Auth";
import ErrorPage from "../ErrorPage";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/category/:id", 
        element: <h2>Category Details</h2>
      },
    ]
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  }
]);

export default Router;