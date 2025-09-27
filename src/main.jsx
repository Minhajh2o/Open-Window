import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";
import {ToastContainer} from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer position="top-center" autoClose={3000} />
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>
);
