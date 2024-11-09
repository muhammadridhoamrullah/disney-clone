import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
