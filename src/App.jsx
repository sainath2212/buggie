import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };
  const appLayout = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appLayout} />;
}

export default App;
