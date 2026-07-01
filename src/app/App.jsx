import "../App.css";
import "../index.css";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../portfolioSlice";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import HomeSection from "../sections/home/HomeSection";
import Projects from "../sections/projects/Projects";
import Contact from "../sections/contact/Contact";
import About from "../sections/about/About";
import { BASENAME, ROUTES } from "../utils/routes";

function AppLayout() {
  const { theme } = useSelector(selectPortfolioSlice);

  return (
    <div
      className={`min-h-full ${theme === "Dark" ? `bg-dark` : `bg-primary`} appContainer min-h-screen items-center flex flex-col transition-colors duration-500 ease-in-out`}
    >
      <Navbar />
      <div
        className={`componentContainer ${theme === "Dark" ? `border-neutral-500/40` : `border-neutral-200`} w-full flex-1 flex flex-col transition-colors duration-500`}
      >
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        { index: true, element: <HomeSection /> },
        { path: "projects", element: <Projects /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        {
          path: "work",
          element: <Navigate to={ROUTES.projects} replace />,
        },
        { path: "*", element: <Navigate to={ROUTES.home} replace /> },
      ],
    },
  ],
  { basename: BASENAME || undefined },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
