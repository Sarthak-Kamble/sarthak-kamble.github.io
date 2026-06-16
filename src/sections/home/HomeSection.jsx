/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import ProfilePic1 from "../../../assets/profile_pic_1.webp";
import { motion } from "framer-motion";
import TechStack from "./skills/TechStack";
import { Mail } from "lucide-react";

const HomeSection = () => {
  const { theme } = useSelector(selectPortfolioSlice);
  const isDark = theme === "Dark";

  return (
    <div
      className={`relative h-full flex items-center justify-center py-28 lg:border-l lg:border-r w-full lg:w-[60%] mx-auto
        ${isDark ? "border-neutral-800/80" : "border-neutral-100"}
      `}
    >
      <div className="relative z-10 flex flex-col items-center h-full justify-start w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`relative w-full overflow-hidden h-fit items-center flex select-none flex-col px-6 py-14 lg:py-20 gap-5 lg:gap-7 font-public-sans ${isDark ? "text-white" : "text-[#121212]"}`}
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div
              className={`home-hero-blocks ${
                isDark ? "home-hero-blocks--dark" : "home-hero-blocks--light"
              }`}
            />
            <div className="home-hero-glow">
              <div
                className={`home-hero-blob home-hero-blob--purple ${
                  isDark ? "home-hero-blob--dark" : "home-hero-blob--light"
                }`}
              />
              <div
                className={`home-hero-blob home-hero-blob--yellow ${
                  isDark ? "home-hero-blob--dark" : "home-hero-blob--light"
                }`}
              />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-5 lg:gap-7 w-full">
          <div
            className={`rounded-full p-px ${
              isDark ? "bg-neutral-700" : "bg-neutral-200"
            }`}
          >
            <div className="rounded-full overflow-hidden">
              <img
                src={ProfilePic1}
                alt=""
                className="w-28 h-28 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 items-center justify-center max-w-2xl">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
                Hey, I'm Sarthak Kamble
              </h1>
              <p className="text-4xl lg:text-5xl font-semibold tracking-tight bg-linear-to-b from-violet-400 to-violet-600 bg-clip-text text-transparent">
                Frontend Engineer
              </p>
            </div>
            <p
              className={`text-lg leading-relaxed text-center ${isDark ? "text-neutral-500" : "text-neutral-500"}`}
            >
              I craft intuitive web experiences where design meets
              functionality — fast, responsive, and delightful interfaces on the
              web.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors
                ${isDark ? "bg-white text-neutral-900 hover:bg-neutral-200" : "bg-neutral-900 text-white hover:bg-neutral-800"}
              `}
            >
              <Mail className="w-4 h-4" />
              <span>Let's Connect</span>
            </button>
            <div
              className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md ${
                isDark ? "text-neutral-400" : "text-neutral-500"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Open to work</span>
            </div>
          </div>
          </div>
        </motion.div>

        <div className="w-full flex items-center justify-center">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
