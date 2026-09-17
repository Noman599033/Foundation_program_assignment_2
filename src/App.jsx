import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MainLayout from "./layouts/MainLayout";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
    path: "/movies",
    element: <Movies/>,
  },
    ]
  },
  
]);

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router