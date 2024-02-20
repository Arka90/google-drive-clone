import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Home from "./pages/Home";
import MyDrive from "./pages/MyDrive";
import Computers from "./pages/Computers";
import ShareWithMe from "./pages/ShareWithMe";
import Recent from "./pages/Recent";
import Stared from "./pages/Stared";
import Spam from "./pages/Spam";
import Bin from "./pages/Bin";
import Storage from "./pages/Storage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/myDrive",
        element: <MyDrive />,
      },
      {
        path: "/computers",
        element: <Computers />,
      },
      {
        path: "/sharedWithMe",
        element: <ShareWithMe />,
      },
      {
        path: "/recent",
        element: <Recent />,
      },
      {
        path: "/stared",
        element: <Stared />,
      },
      {
        path: "/spam",
        element: <Spam />,
      },
      {
        path: "/bin",
        element: <Bin />,
      },
      {
        path: "/storage",
        element: <Storage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
