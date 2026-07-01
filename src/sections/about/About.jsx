import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import ProfilePic1 from "../../../assets/profile_pic_1.webp";
import Footer from "../../components/Footer";
import { MapPin, Sparkles, Code2, Palette, Briefcase, Layers, Clock } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const highlightCardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const highlights = [
  { label: "Role", value: "Frontend Engineer", icon: Briefcase },
  { label: "Location", value: "Mumbai, India", icon: MapPin },
  { label: "Focus", value: "React & UI Systems", icon: Layers },
  { label: "Experience", value: "3+ Years", icon: Clock },
];

const HighlightCard = ({ item, isDark }) => {
  const { icon: Icon, label, value } = item;

  return (
    <motion.article
      variants={highlightCardVariants}
      whileHover={{ y: -2, transition: { duration: 0.2, ease: "easeOut" } }}
      className={`rounded-xl border p-4 transition-colors duration-300 md:p-5 ${
        isDark
          ? "border-neutral-800 bg-neutral-900/30 hover:border-neutral-700"
          : "border-neutral-200 bg-white/50 hover:border-neutral-300"
      }`}
    >
      <div
        className={`mb-3 inline-flex rounded-lg border p-2 ${
          isDark
            ? "border-violet-500/20 bg-violet-500/10 text-violet-300"
            : "border-violet-400/25 bg-violet-50 text-violet-600"
        }`}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
      </div>
      <p
        className={`text-[10px] font-medium uppercase tracking-widest ${
          isDark ? "text-neutral-500" : "text-neutral-400"
        }`}
      >
        {label}
      </p>
      <p
        className={`mt-1.5 text-sm font-semibold leading-snug tracking-tight ${
          isDark ? "text-white" : "text-[#121212]"
        }`}
      >
        {value}
      </p>
    </motion.article>
  );
};

const pillars = [
  {
    icon: Code2,
    title: "Clean architecture",
    description:
      "Modular components, predictable state, and performance-first patterns that scale with the product.",
  },
  {
    icon: Palette,
    title: "Design-minded",
    description:
      "Pixel-perfect implementation with attention to typography, spacing, and motion that feels intentional.",
  },
  {
    icon: Sparkles,
    title: "User-centric",
    description:
      "Interfaces that feel fast and intuitive — reducing friction from first load to the last interaction.",
  },
];

const About = () => {
  const { theme } = useSelector(selectPortfolioSlice);
  const isDark = theme === "Dark";

  return (
    <div
      className={`relative mx-auto flex w-full flex-col pt-28 font-public-sans lg:w-[60%] lg:border-l lg:border-r ${
        isDark
          ? "border-neutral-800/80 text-white"
          : "border-neutral-100 text-[#121212]"
      }`}
    >
      <section className="w-full px-6 pb-16 pt-8 md:pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mx-auto flex w-full max-w-4xl flex-col gap-12"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <span
              className={`text-xs font-medium uppercase tracking-widest ${
                isDark ? "text-violet-400" : "text-violet-600"
              }`}
            >
              About
            </span>
            <h1
              className={`text-2xl font-semibold tracking-tight md:text-3xl ${
                isDark ? "text-white" : "text-[#121212]"
              }`}
            >
              About Me
            </h1>
            <p
              className={`max-w-2xl text-sm leading-relaxed md:text-base ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              A little more about who I am, what I build, and how I approach
              frontend engineering.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`shine-border-card ${
              isDark ? "shine-border-card--dark" : "shine-border-card--light"
            }`}
          >
            <div
              className={`shine-border-card__inner overflow-hidden p-6 md:p-8 ${
                isDark
                  ? "shine-border-card__inner--dark"
                  : "shine-border-card__inner--light"
              }`}
            >
              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                <div className="relative shrink-0">
                  <div
                    className={`rounded-2xl p-px ${
                      isDark ? "bg-neutral-700" : "bg-neutral-200"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl border-4 ${
                        isDark ? "border-neutral-900" : "border-white"
                      }`}
                    >
                      <img
                        src={ProfilePic1}
                        alt="Sarthak Kamble"
                        className="h-44 w-44 object-cover md:h-52 md:w-52"
                      />
                      <div
                        className={`absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-xs font-medium shadow-lg backdrop-blur-md ${
                          isDark
                            ? "border-emerald-400/25 bg-neutral-900/80 text-emerald-300"
                            : "border-white/30 bg-neutral-900/75 text-emerald-300"
                        }`}
                      >
                        <span className="relative flex h-1.5 w-1.5 shrink-0">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                        Open to work
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 text-center md:text-left">
                  <div>
                    <h2
                      className={`text-xl font-semibold tracking-tight md:text-2xl ${
                        isDark ? "text-white" : "text-[#121212]"
                      }`}
                    >
                      Sarthak Kamble
                    </h2>
                    <p
                      className={`mt-1 bg-linear-to-b from-violet-400 to-violet-600 bg-clip-text text-lg font-medium text-transparent`}
                    >
                      Frontend Engineer
                    </p>
                    <p
                      className={`mt-2 inline-flex items-center justify-center gap-1.5 text-sm md:justify-start ${
                        isDark ? "text-neutral-500" : "text-neutral-500"
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      Mumbai, India
                    </p>
                  </div>

                  <p
                    className={`text-sm leading-relaxed md:text-base ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    I craft intuitive web experiences where design meets
                    functionality — fast, responsive, and delightful interfaces
                    on the web. Currently building product-facing features at
                    Infidigit Consultants, with a focus on React, performance,
                    and polished UI systems.
                  </p>

                  <p
                    className={`text-sm leading-relaxed md:text-base ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    I enjoy turning complex workflows into clear, accessible
                    interfaces — from SEO tooling and payment flows to
                    LLM-powered content experiences. I care about the details:
                    loading states, micro-interactions, and code that teammates
                    can extend confidently.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          >
            {highlights.map((item) => (
              <HighlightCard key={item.label} item={item} isDark={isDark} />
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span
                className={`text-xs font-medium uppercase tracking-widest ${
                  isDark ? "text-violet-400" : "text-violet-600"
                }`}
              >
                Approach
              </span>
              <h2
                className={`text-lg font-semibold tracking-tight md:text-xl ${
                  isDark ? "text-white" : "text-[#121212]"
                }`}
              >
                How I work
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {pillars.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className={`rounded-xl border p-5 transition-colors duration-300 ${
                    isDark
                      ? "border-neutral-800 bg-neutral-900/30 hover:border-neutral-700"
                      : "border-neutral-200 bg-white/50 hover:border-neutral-300"
                  }`}
                >
                  <div
                    className={`mb-4 inline-flex rounded-lg border p-2.5 ${
                      isDark
                        ? "border-violet-500/20 bg-violet-500/10 text-violet-300"
                        : "border-violet-400/25 bg-violet-50 text-violet-600"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3
                    className={`text-sm font-semibold ${
                      isDark ? "text-white" : "text-[#121212]"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isDark ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
