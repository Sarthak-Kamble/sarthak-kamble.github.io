const rawBase = import.meta.env.VITE_BASE_PATH ?? import.meta.env.BASE_URL ?? "/";

const normalizedBase = rawBase.startsWith("/") ? rawBase : `/${rawBase}`;
const withTrailingSlash = normalizedBase.endsWith("/")
  ? normalizedBase
  : `${normalizedBase}/`;

/** Vite asset base — always ends with / */
export const APP_BASE = withTrailingSlash === "//" ? "/" : withTrailingSlash;

/** React Router basename — empty string at site root */
export const BASENAME =
  APP_BASE === "/" ? "" : APP_BASE.replace(/\/$/, "");

/** App routes — clean paths relative to site root */
export const ROUTES = {
  home: "/",
  work: "/work",
  contact: "/contact",
};
