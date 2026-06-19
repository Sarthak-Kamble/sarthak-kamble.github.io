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

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

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
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
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

          <motion.div
            variants={heroItemVariants}
            className={`relative z-10 rounded-full p-px ${
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
          </motion.div>

          <motion.h1
            variants={heroItemVariants}
            className="relative z-10 text-4xl lg:text-5xl font-semibold tracking-tight text-center"
          >
            Hey, I'm Sarthak Kamble
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
            className="relative z-10 text-4xl lg:text-5xl font-semibold tracking-tight text-center bg-linear-to-b from-violet-400 to-violet-600 bg-clip-text text-transparent"
          >
            Frontend Engineer
          </motion.p>

          <motion.p
            variants={heroItemVariants}
            className={`relative z-10 max-w-2xl text-lg leading-relaxed text-center ${isDark ? "text-neutral-500" : "text-neutral-500"}`}
          >
            I craft intuitive web experiences where design meets functionality
            — fast, responsive, and delightful interfaces on the web.
          </motion.p>

          <motion.div
            variants={heroItemVariants}
            className="relative z-10 flex w-full max-w-2xl flex-col items-stretch justify-center gap-3 lg:flex-row lg:items-center"
          >
              <a
                href={Resume}
                download="Sarthak_Kamble_Resume.pdf"
                className={`cv-shine-btn w-full lg:w-auto ${
                  isDark ? "cv-shine-btn--dark" : "cv-shine-btn--light"
                }`}
              >
                <span
                  className={`cv-shine-btn__inner w-full justify-center ${
                    isDark
                      ? "cv-shine-btn__inner--dark"
                      : "cv-shine-btn__inner--light"
                  }`}
                >
                  <ArrowDownToLine className="w-4 h-4" />
                  <span>Download CV</span>
                </span>
              </a>

              <Link
                to={ROUTES.contact}
                className={`flex w-full items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors lg:w-auto
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
                  className={`text-center ${isDark ? "text-neutral-400" : "text-emerald-500"}`}
                >
                  Available for new opportunities
                </span>
              </Link>
            </motion.div>

          <motion.div
            variants={heroItemVariants}
            className="relative z-10 flex items-center justify-center gap-3 pt-1"
          >
            {SOCIAL_LINKS.map(({ id, label, href, Icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`hero-glass-circle ${
                    isDark
                      ? "hero-glass-circle--dark"
                      : "hero-glass-circle--light"
                  }`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
            ))}
          </motion.div>
        </motion.div>

        <div className="w-full flex items-center justify-center">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
