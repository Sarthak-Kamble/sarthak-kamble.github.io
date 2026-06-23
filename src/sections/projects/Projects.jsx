import React from "react";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../../portfolioSlice";
import { projects } from "../../utils/projects";
import Footer from "../../components/Footer";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCardContent = ({ project, isDark }) => (
  <>
    <div
      className={`relative mb-5 aspect-[16/9] overflow-hidden rounded-lg border ${
        isDark ? "border-neutral-800" : "border-neutral-200"
      }`}
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${project.gradient} ${
          isDark ? "bg-neutral-900" : "bg-neutral-100"
        }`}
      />
      <div
        className={`absolute inset-0 opacity-40 ${
          isDark
            ? "home-hero-blocks home-hero-blocks--dark"
            : "home-hero-blocks home-hero-blocks--light"
        }`}
        aria-hidden
      />
      <div className="absolute inset-0 flex items-end p-4">
        <span
          className={`rounded-md border px-2 py-1 text-[10px] font-medium uppercase tracking-widest backdrop-blur-sm ${
            project.featured
              ? isDark
                ? "border-violet-500/30 bg-violet-500/10 text-violet-300"
                : "border-violet-400/40 bg-violet-50/80 text-violet-700"
              : isDark
                ? "border-neutral-700 bg-neutral-900/60 text-neutral-400"
                : "border-neutral-200 bg-white/70 text-neutral-500"
          }`}
        >
          {project.featured ? "Featured" : "Project"}
        </span>
      </div>
    </div>

    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <h3
        className={`text-lg font-semibold tracking-tight ${
          isDark ? "text-white" : "text-[#121212]"
        }`}
      >
        {project.title}
      </h3>
      <span
        className={`shrink-0 text-sm font-medium ${
          isDark ? "text-neutral-500" : "text-neutral-400"
        }`}
      >
        {project.year}
      </span>
    </div>

    <p
      className={`mt-3 text-sm leading-relaxed ${
        isDark ? "text-neutral-400" : "text-neutral-600"
      }`}
    >
      {project.description}
    </p>

    <div className="mt-4 flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span
          key={`${project.id}-${tag}`}
          className={`rounded-md border px-2 py-1 text-xs font-medium ${
            isDark
              ? "border-neutral-800 bg-neutral-900/50 text-neutral-400"
              : "border-neutral-200 bg-white/70 text-neutral-600"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="mt-5 flex flex-wrap items-center gap-4">
      <a
        href={project.liveUrl}
        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
          isDark
            ? "text-violet-400 hover:text-violet-300"
            : "text-violet-600 hover:text-violet-700"
        }`}
      >
        Live demo
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
      <a
        href={project.githubUrl}
        className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
          isDark
            ? "text-neutral-500 hover:text-neutral-300"
            : "text-neutral-500 hover:text-neutral-800"
        }`}
      >
        <FaGithub className="h-3.5 w-3.5" />
        Source
      </a>
    </div>
  </>
);

const ProjectCard = ({ project, isDark }) => {
  if (project.featured) {
    return (
      <article>
        <div
          className={`shine-border-card ${
            isDark ? "shine-border-card--dark" : "shine-border-card--light"
          }`}
        >
          <div
            className={`shine-border-card__inner p-5 md:p-6 ${
              isDark
                ? "shine-border-card__inner--dark"
                : "shine-border-card__inner--light"
            }`}
          >
            <ProjectCardContent project={project} isDark={isDark} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`rounded-xl border p-5 md:p-6 transition-colors duration-300 ${
        isDark
          ? "border-neutral-800 bg-neutral-900/30 hover:border-neutral-700"
          : "border-neutral-200 bg-white/50 hover:border-neutral-300"
      }`}
    >
      <ProjectCardContent project={project} isDark={isDark} />
    </article>
  );
};

const Projects = () => {
  const { theme } = useSelector(selectPortfolioSlice);
  const isDark = theme === "Dark";

  return (
    <div
      className={`relative flex w-full flex-col pt-28 lg:w-[60%] lg:border-l lg:border-r mx-auto font-public-sans ${
        isDark
          ? "border-neutral-800/80 text-white"
          : "border-neutral-100 text-[#121212]"
      }`}
    >
      <section className="w-full px-6 pb-16 md:pb-20 pt-8">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span
              className={`text-xs font-medium uppercase tracking-widest ${
                isDark ? "text-violet-400" : "text-violet-600"
              }`}
            >
              Work
            </span>
            <h1
              className={`text-2xl font-semibold tracking-tight md:text-3xl ${
                isDark ? "text-white" : "text-[#121212]"
              }`}
            >
              Projects
            </h1>
            <p
              className={`max-w-2xl text-sm leading-relaxed md:text-base ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Selected work — products, tools, and interfaces I&apos;ve helped
              design and ship.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isDark={isDark}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
