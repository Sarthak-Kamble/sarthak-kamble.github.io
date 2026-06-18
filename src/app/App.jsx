import "../App.css";
import "../index.css";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../portfolioSlice";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomeSection from "../sections/home/HomeSection";
import Projects from "../sections/project/Projects";
import Contact from "../sections/contact/Contact";
import { BASENAME, ROUTES } from "../utils/routes";

function App() {
  const { theme } = useSelector(selectPortfolioSlice);

  return (
    <Router basename={BASENAME || undefined}>
      <div
        className={`min-h-full ${theme === "Dark" ? `bg-dark` : `bg-primary`} appContainer min-h-screen items-center flex flex-col transition-colors duration-500 ease-in-out`}
      >
        <Navbar />
        <div
          className={`componentContainer ${theme === "Dark" ? `border-neutral-500/40` : `border-neutral-200`} w-full flex-1 flex flex-col transition-colors duration-500`}
        >
          <Routes>
            <Route path={ROUTES.home} element={<HomeSection />} />
            <Route path="" element={<HomeSection />} />
            <Route path={ROUTES.work} element={<Projects />} />
            <Route path={`${ROUTES.work}/`} element={<Navigate to={ROUTES.work} replace />} />
            <Route path="/projects" element={<Navigate to={ROUTES.work} replace />} />
            <Route path="/projects/" element={<Navigate to={ROUTES.work} replace />} />
            <Route path={ROUTES.contact} element={<Contact />} />
            <Route path={`${ROUTES.contact}/`} element={<Navigate to={ROUTES.contact} replace />} />
            <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
