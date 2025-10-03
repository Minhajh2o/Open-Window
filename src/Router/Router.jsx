import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Layouts/Home";
import News from "../Layouts/News";
import Auth from "../Layouts/Auth";
import ErrorPage from "../ErrorPage";
import NewsCategories from "../Pages/NewsCategories";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Navigate to="/category/01" replace />,
      },
      {
        path: "/category/:id",
        element: <NewsCategories />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Router;
