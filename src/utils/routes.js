/** Vite injects BASE_URL from vite.config `base` at build time */
const baseUrl = import.meta.env.BASE_URL || "/";

/** React Router basename — empty at site root (e.g. username.github.io/) */
export const BASENAME =
  baseUrl === "/" || baseUrl === "" ? "" : baseUrl.replace(/\/$/, "");

/** App routes — paths relative to site root */
export const ROUTES = {
  home: "/",
  work: "/work",
  contact: "/contact",
};
