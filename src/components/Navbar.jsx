import React, { useState, useEffect, useRef } from "react";
import { navlist } from "../utils/constants";
import { AiOutlineSun } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectPortfolioSlice, setTheme } from "../portfolioSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(selectPortfolioSlice);
  const isDark = theme === "Dark";

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`${theme === "Dark" ? `bg-gray-400/10 border-gray-200/30` : `bg-white/50 border-gray-300`} w-fit md:w-[40%] lg:w-[40%] fixed p-4 rounded-lg top-6 border shadow bg-opacity-90 backdrop-blur-md z-40 transition-transform duration-500 ease-in-out 
      ${isVisible ? "translate-y-0" : "-translate-y-40"}`}
    >
      <div className="px-3">
        <div className="flex justify-between items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-8">
            {navlist?.map((data) => {
              return (
                <li className="" key={`${data?.navText}+${data?.id}`}>
                  <Link
                    to={data?.link}
                    className={`${isDark ? `text-white` : `text-gray-500`} transition-colors ease-in-out duration-300`}
                  >
                    {data?.icon}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            ref={toggleRef}
            className="cursor-pointer"
            onClick={() => {
              const newMode = theme === "Dark" ? "Light" : "Dark";
              dispatch(setTheme(newMode));
            }}
          >
            {isDark ? (
              <AiOutlineSun className="w-5 h-5 text-white" />
            ) : (
              <AiOutlineMoon className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
