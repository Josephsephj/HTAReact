import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/style.css/App.css";
import {
  Home,
  About,
  Contect,
  Donate,
  Membership,
  OurWork,
  Strecture,
  HomelayOut,
} from "./pages";
import // Vision,
// Mission,
// AimsObjectives,
// FunctionsValues,
// FuturePlans,
// Departments,
"./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomelayOut />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
        // children: [
        //   { path: "vision", element: <Vision /> },
        //   { path: "mission", element: <Mission /> },
        // { path: "aimsobjectives", element: <AimsObjectives /> },
        // { path: "functionsvalues", element: <FunctionsValues /> },
        // { path: "futureplans", element: <FuturePlans /> },
        // { path: "department", element: <Departments /> },
        // ],
      },
      { path: "contect", element: <Contect /> },
      { path: "donate", element: <Donate /> },
      { path: "membership", element: <Membership /> },
      { path: "ourwork", element: <OurWork /> },
      { path: "strecture", element: <Strecture /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
