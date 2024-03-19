import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./Root";
import Proddata from "./Components/proddata";
import Home from "./Components/Home";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
export default function App() {
  let brouserRouter = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <Root />,
    },
    {
      path: "/productdetails",
      element: <Proddata />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={brouserRouter}></RouterProvider>
    </div>
  );
}
