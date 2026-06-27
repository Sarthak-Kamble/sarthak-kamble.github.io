import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPortfolioSlice } from "../portfolioSlice";
import { footerNavLinks, socialLinks } from "../utils/constants";

const Footer = ({ className = "", compact = false }) => {
  const { theme } = useSelector(selectPortfolioSlice);
  const isDark = theme === "Dark";
  const year = new Date().getFullYear();

  return (
    <footer
      className={`w-full px-6 font-public-sans ${
        compact ? "pb-4 pt-2" : "pb-10 pt-4"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-4xl">
        <div
          className={`flex flex-col items-center border-t ${
            compact ? "gap-3 pt-4" : "gap-6 pt-8"
          } ${isDark ? "border-neutral-800" : "border-neutral-200"}`}
        >
          <nav
            className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1"
            aria-label="Footer navigation"
          >
            {footerNavLinks.map((link, index) => (
              <React.Fragment key={link.to}>
                {index > 0 && (
                  <span
                    className={`px-2 text-xs ${
                      isDark ? "text-neutral-700" : "text-neutral-300"
                    }`}
                    aria-hidden
                  >
                    ·
                  </span>
                )}
                <Link
                  to={link.to}
                  className={`text-sm font-medium transition-colors ${
                    isDark
                      ? "text-neutral-500 hover:text-violet-300"
                      : "text-neutral-500 hover:text-violet-600"
                  }`}
                >
                  {link.label}
                </Link>
              </React.Fragment>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {socialLinks.map(({ id, label, href, Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`footer-social-link ${
                  isDark
                    ? "footer-social-link--dark"
                    : "footer-social-link--light"
                }`}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p
            className={`text-center text-xs ${
              isDark ? "text-neutral-600" : "text-neutral-400"
            }`}
          >
            © {year} Sarthak Kamble
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
