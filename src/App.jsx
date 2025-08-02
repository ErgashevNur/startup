// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            { path: "/", element: <LandingPage /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
          ],
        },
        {
          element: <MainLayout />,
          children: [
            { path: "/home", element: <Home /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}