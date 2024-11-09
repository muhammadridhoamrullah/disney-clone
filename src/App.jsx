import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <div className="bg-[#0F1014] min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
