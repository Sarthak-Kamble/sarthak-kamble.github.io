import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  aiTools,
  backendTech,
  databases,
  devTools,
  frontendTech,
} from "../../../utils/constants";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../../portfolioSlice";

const skillCategories = [
  { id: "frontend", label: "Frontend", items: frontendTech, wide: true },
  { id: "backend", label: "Backend", items: backendTech },
  { id: "databases", label: "Databases", items: databases },
  { id: "devtools", label: "Dev Tools", items: devTools },
  { id: "ai", label: "AI Tools", items: aiTools },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const chipContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.06 },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

const useDesktopGlow = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (min-width: 768px)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return enabled;
};

const TechChip = ({ item, isDark, interactive }) => (
  <motion.div
    variants={chipVariants}
    whileHover={interactive ? { y: -2, scale: 1.03 } : undefined}
    transition={{ type: "spring", stiffness: 420, damping: 22 }}
    className={`group flex items-center gap-2 rounded-lg border px-2.5 py-1.5 transition-colors duration-200 ${
      isDark
        ? "border-neutral-800 bg-neutral-900/50 hover:border-violet-500/35 hover:bg-violet-500/5"
        : "border-neutral-200 bg-white/70 hover:border-violet-400/40 hover:bg-violet-50"
    }`}
    title={item.tech}
  >
    <img
      src={item.iconLink}
      alt=""
      className="h-4 w-4 shrink-0 object-contain"
      loading="lazy"
    />
    <span
      className={`text-xs font-medium leading-none ${
        isDark
          ? "text-neutral-400 group-hover:text-neutral-200"
          : "text-neutral-600 group-hover:text-neutral-900"
      }`}
    >
      {item.tech}
    </span>
  </motion.div>
);

const MarqueeRow = ({ items, isDark }) => {
  const track = [...items, ...items];

  return (
    <div className="tech-marquee" aria-hidden>
      <div
        className={`tech-marquee__track ${
          isDark ? "tech-marquee__track--dark" : "tech-marquee__track--light"
        }`}
      >
        {track.map((item, index) => (
          <div
            key={`${item.id ?? item.tech}-${index}`}
            className={`tech-marquee__chip ${
              isDark ? "tech-marquee__chip--dark" : "tech-marquee__chip--light"
            }`}
          >
            <img
              src={item.iconLink}
              alt=""
              className="h-4 w-4 shrink-0 object-contain"
              loading="lazy"
            />
            <span>{item.tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CategoryCard = ({
  category,
  isDark,
  prefersReducedMotion,
  glowEnabled,
}) => {
  const useMarquee =
    category.wide && category.items.length > 6 && !prefersReducedMotion;
  const interactive = glowEnabled;

  return (
    <motion.article
      variants={itemVariants}
      className={
        glowEnabled
          ? `tech-stack__card ${category.wide ? "sm:col-span-2" : ""} ${
              isDark ? "tech-stack__card--dark" : "tech-stack__card--light"
            }`
          : `flex flex-col gap-3 rounded-xl border p-4 md:p-5 ${
              category.wide ? "sm:col-span-2" : ""
            } ${
              isDark
                ? "border-neutral-800 bg-neutral-900/30"
                : "border-neutral-200 bg-white/50"
            }`
      }
    >
      <div className="relative z-10 flex flex-col gap-3 p-4 md:p-5">
        <h3
          className={`text-xs font-medium uppercase tracking-widest ${
            isDark ? "text-violet-400" : "text-violet-600"
          }`}
        >
          {category.label}
        </h3>

        {useMarquee ? (
          <MarqueeRow items={category.items} isDark={isDark} />
        ) : (
          <motion.div
            variants={chipContainerVariants}
            className="flex flex-wrap gap-2"
          >
            {category.items.map((item) => (
              <TechChip
                key={item.id ?? item.tech}
                item={item}
                isDark={isDark}
                interactive={interactive}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.article>
  );
};

const TechStack = () => {
  const { theme } = useSelector(selectPortfolioSlice);
  const isDark = theme === "Dark";
  const prefersReducedMotion = useReducedMotion();
  const desktopGlow = useDesktopGlow();
  const glowEnabled = desktopGlow && !prefersReducedMotion;
  const gridRef = useRef(null);

  const handleMouseMove = useCallback((event) => {
    const grid = gridRef.current;
    if (!grid) return;

    const rect = grid.getBoundingClientRect();
    grid.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    grid.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);

    grid.querySelectorAll(".tech-stack__card").forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      card.style.setProperty(
        "--spot-x",
        `${event.clientX - cardRect.left}px`,
      );
      card.style.setProperty(
        "--spot-y",
        `${event.clientY - cardRect.top}px`,
      );
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    gridRef.current?.classList.add("tech-stack-grid--active");
  }, []);

  const handleMouseLeave = useCallback(() => {
    gridRef.current?.classList.remove("tech-stack-grid--active");
  }, []);

  return (
    <section className="w-full px-6 pb-16 md:pb-20 font-public-sans">
      <motion.div
        className="mx-auto flex w-full max-w-4xl flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={sectionVariants}
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <span
            className={`text-xs font-medium uppercase tracking-widest ${
              isDark ? "text-violet-400" : "text-violet-600"
            }`}
          >
            Stack
          </span>
          <h2
            className={`text-2xl font-semibold tracking-tight md:text-3xl ${
              isDark ? "text-white" : "text-[#121212]"
            }`}
          >
            Tech Stack
          </h2>
        </motion.div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${
            glowEnabled
              ? `tech-stack-grid ${
                  isDark ? "tech-stack-grid--dark" : "tech-stack-grid--light"
                }`
              : ""
          }`}
          onMouseMove={glowEnabled ? handleMouseMove : undefined}
          onMouseEnter={glowEnabled ? handleMouseEnter : undefined}
          onMouseLeave={glowEnabled ? handleMouseLeave : undefined}
        >
          {glowEnabled && (
            <div className="tech-stack-grid__spotlight" aria-hidden />
          )}

          {skillCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isDark={isDark}
              prefersReducedMotion={prefersReducedMotion}
              glowEnabled={glowEnabled}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
