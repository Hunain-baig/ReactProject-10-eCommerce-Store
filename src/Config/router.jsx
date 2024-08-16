import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import Login from "../Views/Login";
import Dashboard from "../Views/Dashboard";
import Register from "../Views/Register";
import AddProduct from "../Components/AddProduct";
import Detail from "../Views/Detail";
import Cart from "../Components/Cart";
import { auth, onAuthStateChanged } from "./firebase";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function Main() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check auth state
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {

    const { pathname } = window.location
    if(user){
      console.log("User logged in",user);
      if(pathname === "/login"){
        navigate("/")
      }
    }else{
      console.log("User logged out",user);
      if(pathname === "/addproduct"){
        navigate("/login")
      }
    }
  }, [user, window.location.pathname]);

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default function Router() {
  return <RouterProvider router={router} />;
}
