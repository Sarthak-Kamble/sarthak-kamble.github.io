import { LiaHomeSolid } from "react-icons/lia";
import { BiBriefcaseAlt } from "react-icons/bi";
import { LuFolderCode } from "react-icons/lu";
import { BiEnvelope } from "react-icons/bi";
import { ROUTES } from "./routes";

export const navlist = [
  {
    id: 1,
    navText: "Home",
    icon: <LiaHomeSolid className="w-5 h-5" />,
    link: ROUTES.home,
  },
  // {
  //   id: 2,
  //   navText: "Experience",
  //   icon: <BiBriefcaseAlt className="w-5 h-5" />,
  //   link: "/experience",
  // },
  {
    id: 3,
    navText: "Projects",
    icon: <LuFolderCode className="w-5 h-5" />,
    link: ROUTES.work,
  },
  {
    id: 4,
    navText: "Contact",
    icon: <BiEnvelope className="w-5 h-5" />,
    link: ROUTES.contact,
  },
];

export const frontendTech = [
  {
    id: 1,
    tech: "JavaScript",
    iconLink: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/960px-JavaScript-logo.png`,
  },
  {
    id: 2,
    tech: "TypeScript",
    iconLink: `https://cdn-icons-png.flaticon.com/512/5968/5968381.png`,
  },
  {
    id: 3,
    tech: "React.js",
    iconLink: `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png`,
  },
  {
    id: 4,
    tech: "Redux Toolkit",
    iconLink: `https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png`,
  },
  {
    id: 5,
    tech: "TanStack Query",
    iconLink: `https://tanstack.com/images/logos/logo-color-600.png`,
  },
  {
    id: 6,
    tech: "TailwindCSS",
    iconLink: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1280px-Tailwind_CSS_Logo.svg.png`,
  },
  {
    id: 7,
    tech: "Emotion.js",
    iconLink: `https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png`,
  },
  {
    id: 8,
    tech: "Framer Motion",
    iconLink: `https://images.seeklogo.com/logo-png/44/2/framer-motion-logo-png_seeklogo-446185.png`,
  },
  {
    id: 9,
    tech: "Ant Design",
    iconLink: `https://www.svgrepo.com/show/353401/ant-design.svg`,
  },
  {
    id: 10,
    tech: "Semcore Integalactic",
    iconLink: `https://avatars.githubusercontent.com/u/3648654?v=4`,
  },
];

export const backendTech = [
  {
    id: 1,
    tech: "Express.js",
    iconLink: `https://www.manektech.com/storage/developer/1646733543.webp`,
  },
  {
    id: 2,
    tech: "Hono.js",
    iconLink: `https://hono.dev/images/logo.svg`,
  },
  {
    id: 3,
    tech: "Node.js",
    iconLink: `https://www.svgrepo.com/show/354119/nodejs-icon.svg`,
  },
];

export const devTools = [
  {
    id: 1,
    tech: "Git",
    iconLink: "https://www.svgrepo.com/show/452210/git.svg",
  },
  {
    id: 2,
    tech: "GitHub",
    iconLink: "https://www.svgrepo.com/show/475654/github-color.svg",
  },
  {
    id: 3,
    tech: "Postman",
    iconLink: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    id: 4,
    tech: "Docker",
    iconLink: "https://www.svgrepo.com/show/452192/docker.svg",
  },
  {
    id: 5,
    tech: "VS Code",
    iconLink: "https://www.svgrepo.com/show/452129/vs-code.svg",
  },
  {
    id: 6,
    tech: "Notion",
    iconLink:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  },
];

export const aiTools = [
  {
    id: 1,
    tech: "Cursor",
    iconLink: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
  },
  {
    id: 2,
    tech: "GitHub Copilot",
    iconLink:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-copilot-icon.png",
  },
  {
    id: 3,
    tech: "Windsurf",
    iconLink:
      "https://exafunction.github.io/public/brand/windsurf-black-symbol.svg",
  },
];

export const databases = [
  {
    id: 1,
    tech: "MongoDB",
    iconLink: `https://staging.svgrepo.com/show/331488/mongodb.svg`,
  },
  {
    id: 2,
    tech: "PostgreSQL",
    iconLink: `https://www.svgrepo.com/show/303301/postgresql-logo.svg`,
  },
];
