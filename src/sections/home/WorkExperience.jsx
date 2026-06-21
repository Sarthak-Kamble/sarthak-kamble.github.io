import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import { workExperience } from "../../utils/experience";
import { MapPin, Briefcase } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const ExperienceCardContent = ({ job, isDark }) => (
  <>
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex flex-col gap-1.5">
        <h3
          className={`text-lg font-semibold tracking-tight ${
            isDark ? "text-white" : "text-[#121212]"
          }`}
        >
          {job.company}
        </h3>
        <div
          className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${
            isDark ? "text-neutral-500" : "text-neutral-500"
          }`}
        >
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {job.location}
          </span>
          <span className="hidden sm:inline text-neutral-600">·</span>
          <span className="inline-flex items-center gap-1">
            <Briefcase className="h-3.5 w-3.5 shrink-0" />
            {job.role}
          </span>
        </div>
      </div>

      <time
        className={`shrink-0 text-sm font-medium ${
          job.current
            ? isDark
              ? "text-violet-400"
              : "text-violet-600"
            : isDark
              ? "text-neutral-500"
              : "text-neutral-400"
        }`}
      >
        {job.period}
      </time>
    </div>

    <ul
      className={`mt-5 flex flex-col gap-3 text-sm leading-relaxed ${
        isDark ? "text-neutral-400" : "text-neutral-600"
      }`}
    >
      {job.highlights.map((point, index) => (
        <li key={`${job.id}-${index}`} className="flex gap-3">
          <span
            className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
              isDark ? "bg-violet-500/70" : "bg-violet-400"
            }`}
            aria-hidden
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </>
);

const WorkExperience = () => {
  const { theme } = useSelector(selectPortfolioSlice);
  const isDark = theme === "Dark";

  return (
    <section className="w-full px-6 py-16 md:py-20 font-public-sans">
      <motion.div
        className="mx-auto flex w-full max-w-4xl flex-col gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionVariants}
      >
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <span
            className={`text-xs font-medium uppercase tracking-widest ${
              isDark ? "text-violet-400" : "text-violet-600"
            }`}
          >
            Career
          </span>
          <h2
            className={`text-2xl font-semibold tracking-tight md:text-3xl ${
              isDark ? "text-white" : "text-[#121212]"
            }`}
          >
            Work Experience
          </h2>
        </motion.div>

        <div className="relative flex flex-col gap-10">
          <div
            className={`absolute left-[7px] top-2 bottom-2 w-px ${
              isDark ? "bg-neutral-800" : "bg-neutral-200"
            }`}
            aria-hidden
          />

          {workExperience.map((job) => (
            <motion.article
              key={job.id}
              variants={itemVariants}
              className="relative pl-8"
            >
              <span
                className={`absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 ${
                  job.current
                    ? isDark
                      ? "border-violet-500 bg-violet-500/20"
                      : "border-violet-500 bg-violet-100"
                    : isDark
                      ? "border-neutral-600 bg-neutral-900"
                      : "border-neutral-300 bg-white"
                }`}
                aria-hidden
              >
                {job.current && (
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                )}
              </span>

              {job.current ? (
                <div
                  className={`shine-border-card ${
                    isDark
                      ? "shine-border-card--dark"
                      : "shine-border-card--light"
                  }`}
                >
                  <div
                    className={`shine-border-card__inner p-5 md:p-6 ${
                      isDark
                        ? "shine-border-card__inner--dark"
                        : "shine-border-card__inner--light"
                    }`}
                  >
                    <ExperienceCardContent job={job} isDark={isDark} />
                  </div>
                </div>
              ) : (
                <div
                  className={`rounded-xl border p-5 md:p-6 transition-colors duration-300 ${
                    isDark
                      ? "border-neutral-800 bg-neutral-900/30 hover:border-neutral-700"
                      : "border-neutral-200 bg-white/50 hover:border-neutral-300"
                  }`}
                >
                  <ExperienceCardContent job={job} isDark={isDark} />
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
