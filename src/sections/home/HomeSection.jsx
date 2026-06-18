/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import ProfilePic1 from "../../../assets/profile_pic_1.webp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TechStack from "./skills/TechStack";
import { ArrowDownToLine } from "lucide-react";
import Resume from "../../../assets/Sarthak_Kamble_Resume.pdf";
import { ROUTES } from "../../utils/routes";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Sarthak-Kamble", // TODO: add your GitHub URL
    Icon: FaGithub,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sarthak-kamble/", // TODO: add your LinkedIn URL
    Icon: FaLinkedin,
  },
  {
    id: "x",
    label: "X (Twitter)",
    href: "https://x.com/Sarthak_4120", // TODO: add your X URL
    Icon: FaXTwitter,
  },
];

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
              <div className="rounded-full overflow-hidden border-4 border-white">
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
                functionality — fast, responsive, and delightful interfaces on
                the web.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 w-full">
              <a
                href={Resume}
                download="Sarthak_Kamble_Resume.pdf"
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors
                  ${
                    isDark
                      ? "border border-neutral-700 text-neutral-200 hover:border-violet-500/60 hover:text-violet-300"
                      : "border border-neutral-300 text-neutral-700 hover:border-violet-400 hover:text-violet-600"
                  }
                `}
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <Link
                to={ROUTES.contact}
                className={`flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors
                  ${
                    isDark
                      ? "border-emerald-500/20 bg-emerald-500/10 backdrop-blur-sm text-neutral-300 hover:border-emerald-500/40 hover:bg-emerald-500/15 hover:text-emerald-300"
                      : "border-emerald-500/25 bg-emerald-500/5 text-neutral-600 hover:border-emerald-500/40 hover:bg-emerald-500/15 hover:text-emerald-700"
                  }
                `}
                aria-label="Open to new opportunities — get in touch"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span
                  className={`${isDark ? "text-neutral-400" : "text-emerald-500"}`}
                >
                  Available for new opportunities
                </span>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-3 pt-1">
              {SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`hero-glass-circle ${
                    isDark ? "hero-glass-circle--dark" : "hero-glass-circle--light"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
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
